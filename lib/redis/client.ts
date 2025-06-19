import { Redis } from '@upstash/redis'

if (!process.env.UPSTASH_REDIS_REST_URL) {
  throw new Error('UPSTASH_REDIS_REST_URL is not defined')
}

if (!process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error('UPSTASH_REDIS_REST_TOKEN is not defined')
}

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

// Cache helpers
export const cache = {
  async get<T>(key: string): Promise<T | null> {
    try {
      const data = await redis.get(key)
      return data as T | null
    } catch (error) {
      console.error('Redis GET error:', error)
      return null
    }
  },

  async set(key: string, value: any, ttlSeconds?: number): Promise<boolean> {
    try {
      if (ttlSeconds) {
        await redis.setex(key, ttlSeconds, JSON.stringify(value))
      } else {
        await redis.set(key, JSON.stringify(value))
      }
      return true
    } catch (error) {
      console.error('Redis SET error:', error)
      return false
    }
  },

  async delete(key: string): Promise<boolean> {
    try {
      await redis.del(key)
      return true
    } catch (error) {
      console.error('Redis DELETE error:', error)
      return false
    }
  },

  async invalidate(pattern: string): Promise<boolean> {
    try {
      const keys = await redis.keys(pattern)
      if (keys.length > 0) {
        await redis.del(...keys)
      }
      return true
    } catch (error) {
      console.error('Redis INVALIDATE error:', error)
      return false
    }
  }
}

// Common cache keys
export const cacheKeys = {
  // Blog
  blogPost: (slug: string) => `blog:post:${slug}`,
  blogPosts: (page: number = 1) => `blog:posts:page:${page}`,
  blogCategories: () => 'blog:categories',
  blogTags: () => 'blog:tags',
  
  // Music
  tracks: (page: number = 1) => `music:tracks:page:${page}`,
  featuredTracks: () => 'music:tracks:featured',
  
  // Events
  upcomingEvents: () => 'events:upcoming',
  pastEvents: (page: number = 1) => `events:past:page:${page}`,
  
  // User specific
  userProfile: (userId: string) => `user:${userId}:profile`,
  userContent: (userId: string, type: string) => `user:${userId}:${type}`,
}

// Cache TTL values (in seconds)
export const cacheTTL = {
  short: 60, // 1 minute
  medium: 300, // 5 minutes
  long: 3600, // 1 hour
  day: 86400, // 24 hours
}