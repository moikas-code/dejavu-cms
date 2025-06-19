import { SiteLayout } from "@/components/layout/site-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { Play, Calendar, Eye, TrendingUp, Tv } from "lucide-react"

// This would come from your database
const featuredVideo = {
  id: "1",
  title: "Dr. Phil Live Show Appearance - July 2024",
  description: "Special appearance with Adam Ray on the Dr. Phil Live Show. Comedy meets culture in this unforgettable segment.",
  videoUrl: "https://youtube.com/embed/...",
  thumbnailUrl: "/api/placeholder/800/450",
  views: 15420,
  date: "July 15, 2024",
  duration: "12:34",
  category: "TV Appearances"
}

const videoCategories = [
  { name: "All Videos", count: 24 },
  { name: "TV Appearances", count: 3 },
  { name: "Music Videos", count: 8 },
  { name: "Behind the Scenes", count: 6 },
  { name: "Live Performances", count: 4 },
  { name: "Interviews", count: 3 }
]

const recentVideos = [
  {
    id: "2",
    title: "Studio Session: Making 'Vibes'",
    thumbnailUrl: "/api/placeholder/400/225",
    views: 8234,
    date: "December 10, 2024",
    duration: "5:42",
    category: "Behind the Scenes"
  },
  {
    id: "3",
    title: "Live at The Forum - Full Performance",
    thumbnailUrl: "/api/placeholder/400/225",
    views: 12890,
    date: "November 28, 2024",
    duration: "45:18",
    category: "Live Performances"
  },
  {
    id: "4",
    title: "DejaVú - Official Music Video",
    thumbnailUrl: "/api/placeholder/400/225",
    views: 34567,
    date: "November 15, 2024",
    duration: "3:28",
    category: "Music Videos"
  },
  {
    id: "5",
    title: "The Creative Process - Interview",
    thumbnailUrl: "/api/placeholder/400/225",
    views: 5678,
    date: "October 30, 2024",
    duration: "18:45",
    category: "Interviews"
  }
]

export default function VideosPage() {
  return (
    <SiteLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background -z-10" />
          
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Videos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch the latest music videos, performances, and exclusive behind-the-scenes content.
            </p>
          </div>
        </section>

        {/* Featured Video */}
        <section className="px-4 -mt-8 mb-12">
          <div className="max-w-6xl mx-auto">
            <GlassCard variant="gradient" className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-black px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {featuredVideo.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Tv className="w-5 h-5 text-accent" />
                    <span className="text-sm text-accent">{featuredVideo.category}</span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    {featuredVideo.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-6">
                    {featuredVideo.description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {featuredVideo.views.toLocaleString()} views
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredVideo.date}
                    </span>
                  </div>
                  
                  <button className="button-primary mt-6">
                    Watch Now
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <GlassCard>
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {videoCategories.map((category) => (
                    <li key={category.name}>
                      <button className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-white/10 transition-colors text-left">
                        <span className="text-gray-300">{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </aside>

            {/* Videos Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Videos</h2>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="text-sm text-gray-400">Sorted by newest</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentVideos.map((video) => (
                  <GlassCard key={video.id} variant="hover" className="overflow-hidden cursor-pointer group">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <span className="bg-black/80 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <span className="text-xs text-gray-400">{video.category}</span>
                      <h3 className="text-lg font-semibold mt-1 mb-2 line-clamp-2">
                        {video.title}
                      </h3>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {video.views.toLocaleString()}
                        </span>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="button-secondary">
                  Load More Videos
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-background-secondary py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to get notified when new videos drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
              />
              <button className="button-primary">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}