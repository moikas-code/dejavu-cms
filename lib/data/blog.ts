import { cache, cacheKeys, cacheTTL } from '@/lib/redis/client'
import { createClient } from '@/lib/supabase/server'

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  featured_image: string | null
  status: 'draft' | 'published'
  published_at: string | null
  category_id: string | null
  tags: string[]
  user_id: string
  created_at: string
  updated_at: string
}

export async function getBlogPosts(page: number = 1, limit: number = 10) {
  // Try to get from cache first
  const cacheKey = cacheKeys.blogPosts(page)
  const cached = await cache.get<BlogPost[]>(cacheKey)
  
  if (cached) {
    console.log('Returning cached blog posts')
    return cached
  }

  // If not in cache, fetch from database
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range((page - 1) * limit, page * limit - 1)

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  // Cache the results
  await cache.set(cacheKey, data, cacheTTL.medium)
  
  return data as BlogPost[]
}

export async function getBlogPost(slug: string) {
  // Try to get from cache first
  const cacheKey = cacheKeys.blogPost(slug)
  const cached = await cache.get<BlogPost>(cacheKey)
  
  if (cached) {
    console.log('Returning cached blog post')
    return cached
  }

  // If not in cache, fetch from database
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error fetching blog post:', error)
    return null
  }

  // Cache the result
  await cache.set(cacheKey, data, cacheTTL.long)
  
  return data as BlogPost
}

export async function invalidateBlogCache() {
  // Invalidate all blog-related cache
  await cache.invalidate('blog:*')
}

export async function getFeaturedBlogPost() {
  const posts = await getBlogPosts(1, 1)
  return posts[0] || null
}

export async function getBlogCategories() {
  const cacheKey = cacheKeys.blogCategories()
  const cached = await cache.get(cacheKey)
  
  if (cached) {
    return cached
  }

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name')

  if (error) {
    console.error('Error fetching blog categories:', error)
    return []
  }

  await cache.set(cacheKey, data, cacheTTL.day)
  return data
}

export async function getPopularTags() {
  const cacheKey = cacheKeys.blogTags()
  const cached = await cache.get<string[]>(cacheKey)
  
  if (cached) {
    return cached
  }

  // In a real app, you'd aggregate tags from posts
  const popularTags = [
    "music", "hip-hop", "studio", "tour", "creative-process", 
    "collaboration", "new-release", "behind-the-scenes"
  ]

  await cache.set(cacheKey, popularTags, cacheTTL.long)
  return popularTags
}