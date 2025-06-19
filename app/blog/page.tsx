import { SiteLayout } from "@/components/layout/site-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { Search, Calendar, Tag, TrendingUp } from "lucide-react"
import Link from "next/link"

// This would come from your database
const featuredPost = {
  id: 1,
  title: "The Journey to DejaVú",
  excerpt: "Exploring the creative process behind my latest project and what's coming next...",
  date: "December 15, 2024",
  category: "Behind the Music",
  tags: ["music", "creative-process", "studio"],
  slug: "journey-to-dejavu",
  readTime: "5 min read"
}

const recentPosts = [
  {
    id: 2,
    title: "Studio Sessions: Making of 'Vibes'",
    excerpt: "A deep dive into the production process...",
    date: "December 10, 2024",
    category: "Studio",
    slug: "studio-sessions-vibes",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Upcoming Shows & Tour Dates",
    excerpt: "Get ready for an incredible 2025...",
    date: "December 5, 2024",
    category: "News",
    slug: "upcoming-shows-2025",
    readTime: "2 min read"
  }
]

const categories = [
  { name: "All Posts", count: 12 },
  { name: "Behind the Music", count: 5 },
  { name: "Studio", count: 3 },
  { name: "News", count: 2 },
  { name: "Lifestyle", count: 2 }
]

const popularTags = [
  "music", "hip-hop", "studio", "tour", "creative-process", 
  "collaboration", "new-release", "behind-the-scenes"
]

export default function BlogPage() {
  return (
    <SiteLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background -z-10" />
          
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Thoughts, stories, and insights from the journey.
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="px-4 -mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none text-white placeholder-gray-400"
              />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Post */}
              <Link href={`/blog/${featuredPost.slug}`}>
                <GlassCard variant="gradient" className="cursor-pointer">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-accent text-black px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <TrendingUp className="w-4 h-4 text-accent" />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-3 hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span className="text-primary">{featuredPost.category}</span>
                  </div>
                </GlassCard>
              </Link>

              {/* Recent Posts */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Recent Posts</h2>
                {recentPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <GlassCard variant="hover" className="cursor-pointer">
                      <h3 className="text-xl font-semibold mb-2 hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span className="text-primary">{post.category}</span>
                      </div>
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
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

              {/* Popular Tags */}
              <GlassCard>
                <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </button>
                  ))}
                </div>
              </GlassCard>

              {/* Newsletter */}
              <GlassCard className="bg-gradient-to-br from-primary/20 to-accent/20">
                <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-4">
                  Get the latest posts delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none mb-3"
                />
                <button className="button-primary w-full">
                  Subscribe
                </button>
              </GlassCard>
            </aside>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}