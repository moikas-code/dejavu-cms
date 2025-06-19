import { SiteLayout } from "@/components/layout/site-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { ShoppingBag, Package, Star, TrendingUp } from "lucide-react"
import Image from "next/image"

// This would come from your Printify integration
const featuredProducts = [
  {
    id: "1",
    title: "Thy Kyd Signature Hoodie",
    price: 65.00,
    image: "/api/placeholder/400/400",
    category: "Hoodies",
    rating: 4.8,
    reviews: 24
  },
  {
    id: "2",
    title: "DejaVú Tour Tee",
    price: 35.00,
    image: "/api/placeholder/400/400",
    category: "T-Shirts",
    rating: 5.0,
    reviews: 18
  },
  {
    id: "3",
    title: "Vibes Only Cap",
    price: 28.00,
    image: "/api/placeholder/400/400",
    category: "Accessories",
    rating: 4.9,
    reviews: 31
  },
  {
    id: "4",
    title: "Limited Edition Vinyl",
    price: 45.00,
    image: "/api/placeholder/400/400",
    category: "Music",
    rating: 5.0,
    reviews: 12
  }
]

const categories = [
  { name: "All Products", count: 24 },
  { name: "Hoodies", count: 6 },
  { name: "T-Shirts", count: 8 },
  { name: "Accessories", count: 5 },
  { name: "Music", count: 5 }
]

export default function MerchPage() {
  return (
    <SiteLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background -z-10" />
          
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Official Merch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Rep the culture. Premium quality merchandise designed for the real ones.
            </p>
          </div>
        </section>

        {/* Featured Banner */}
        <section className="px-4 -mt-8 mb-12">
          <div className="max-w-6xl mx-auto">
            <GlassCard variant="gradient" className="text-center py-6">
              <div className="flex items-center justify-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="font-semibold">Limited Drop:</span>
                <span>New DejaVú Collection Available Now</span>
              </div>
            </GlassCard>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <GlassCard>
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-white/10 transition-colors text-left">
                        <span className="text-gray-300">{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Filters */}
              <GlassCard>
                <h3 className="text-xl font-semibold mb-4">Filter</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Price Range</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">Under $25</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">$25 - $50</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">$50 - $100</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">Over $100</span>
                      </label>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Featured Products</h2>
                <select className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <GlassCard key={product.id} variant="hover" className="overflow-hidden cursor-pointer group">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                      {/* Product image would go here */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Package className="w-20 h-20 text-white/20" />
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="button-primary transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          Quick View
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <span className="text-sm text-gray-400">{product.category}</span>
                      <h3 className="text-lg font-semibold mt-1 mb-2">{product.title}</h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-accent fill-current"
                                  : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">({product.reviews})</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">${product.price}</span>
                        <button className="p-2 rounded-lg bg-primary hover:bg-primary-light transition-colors">
                          <ShoppingBag className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="button-secondary">
                  Load More Products
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <section className="bg-background-secondary py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Package className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-400">
                High-quality materials and printing for merchandise that lasts.
              </p>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Limited Drops</h3>
              <p className="text-gray-400">
                Exclusive designs that won't be restocked once sold out.
              </p>
            </div>
            <div>
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-400">
                Orders processed within 24-48 hours. Worldwide delivery available.
              </p>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}