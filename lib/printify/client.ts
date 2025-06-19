import { z } from 'zod'

const PRINTIFY_API_URL = 'https://api.printify.com/v1'

// Printify types
export const PrintifyProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  options: z.array(z.any()),
  variants: z.array(z.object({
    id: z.number(),
    sku: z.string(),
    cost: z.number(),
    price: z.number(),
    title: z.string(),
    grams: z.number(),
    is_enabled: z.boolean(),
    is_default: z.boolean(),
    is_available: z.boolean(),
    options: z.array(z.number())
  })),
  images: z.array(z.object({
    src: z.string(),
    variant_ids: z.array(z.number()),
    position: z.string(),
    is_default: z.boolean()
  })),
  created_at: z.string(),
  updated_at: z.string(),
  visible: z.boolean(),
  is_locked: z.boolean(),
  external: z.object({
    id: z.string(),
    handle: z.string()
  }).optional()
})

export type PrintifyProduct = z.infer<typeof PrintifyProductSchema>

class PrintifyClient {
  private apiToken: string
  private shopId: string | null = null

  constructor() {
    if (!process.env.PRINTIFY_API_TOKEN) {
      throw new Error('PRINTIFY_API_TOKEN is not set')
    }
    this.apiToken = process.env.PRINTIFY_API_TOKEN
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${PRINTIFY_API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Printify API error: ${response.status} - ${error}`)
    }

    return response.json()
  }

  // Shop management
  async getShops() {
    return this.request('/shops.json')
  }

  async setShop(shopId: string) {
    this.shopId = shopId
  }

  // Product management
  async getProducts(limit = 100, page = 1) {
    if (!this.shopId) throw new Error('Shop ID not set')
    
    return this.request(`/shops/${this.shopId}/products.json?limit=${limit}&page=${page}`)
  }

  async getProduct(productId: string) {
    if (!this.shopId) throw new Error('Shop ID not set')
    
    const product = await this.request(`/shops/${this.shopId}/products/${productId}.json`)
    return PrintifyProductSchema.parse(product)
  }

  async createProduct(productData: any) {
    if (!this.shopId) throw new Error('Shop ID not set')
    
    return this.request(`/shops/${this.shopId}/products.json`, {
      method: 'POST',
      body: JSON.stringify(productData)
    })
  }

  async updateProduct(productId: string, productData: any) {
    if (!this.shopId) throw new Error('Shop ID not set')
    
    return this.request(`/shops/${this.shopId}/products/${productId}.json`, {
      method: 'PUT',
      body: JSON.stringify(productData)
    })
  }

  async deleteProduct(productId: string) {
    if (!this.shopId) throw new Error('Shop ID not set')
    
    return this.request(`/shops/${this.shopId}/products/${productId}.json`, {
      method: 'DELETE'
    })
  }

  // Catalog (available products to create)
  async getCatalog() {
    return this.request('/catalog/blueprints.json')
  }

  async getBlueprintProviders(blueprintId: number) {
    return this.request(`/catalog/blueprints/${blueprintId}/print_providers.json`)
  }

  async getBlueprintVariants(blueprintId: number, printProviderId: number) {
    return this.request(`/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/variants.json`)
  }

  // Orders
  async createOrder(orderData: any) {
    if (!this.shopId) throw new Error('Shop ID not set')
    
    return this.request(`/shops/${this.shopId}/orders.json`, {
      method: 'POST',
      body: JSON.stringify(orderData)
    })
  }

  async getOrders(limit = 100, page = 1) {
    if (!this.shopId) throw new Error('Shop ID not set')
    
    return this.request(`/shops/${this.shopId}/orders.json?limit=${limit}&page=${page}`)
  }

  async getOrder(orderId: string) {
    if (!this.shopId) throw new Error('Shop ID not set')
    
    return this.request(`/shops/${this.shopId}/orders/${orderId}.json`)
  }

  // Webhooks
  async createWebhook(topic: string, url: string) {
    if (!this.shopId) throw new Error('Shop ID not set')
    
    return this.request(`/shops/${this.shopId}/webhooks.json`, {
      method: 'POST',
      body: JSON.stringify({ topic, url })
    })
  }

  async getWebhooks() {
    if (!this.shopId) throw new Error('Shop ID not set')
    
    return this.request(`/shops/${this.shopId}/webhooks.json`)
  }
}

export const printifyClient = new PrintifyClient()