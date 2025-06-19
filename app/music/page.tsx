import { SiteLayout } from "@/components/layout/site-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { SoundCloudPlayer } from "@/components/music/soundcloud-player"
import { Music, Headphones, Disc3 } from "lucide-react"

// This would come from your database
const featuredTracks = [
  {
    id: 1,
    title: "Latest Drop",
    url: "https://soundcloud.com/dejavu/sets/latest",
    description: "Fresh vibes from the studio"
  }
]

const musicPlatforms = [
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/dejavu",
    icon: Music,
    color: "text-orange-500"
  },
  {
    name: "Spotify",
    url: "#",
    icon: Disc3,
    color: "text-green-500"
  },
  {
    name: "Apple Music",
    url: "#",
    icon: Headphones,
    color: "text-pink-500"
  }
]

export default function MusicPage() {
  return (
    <SiteLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background -z-10" />
          
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Music</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stream the latest tracks from DejaVú. Hip hop with a unique perspective.
            </p>
          </div>
        </section>

        {/* Featured Track */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Track</h2>
            <GlassCard variant="gradient" className="p-8">
              <SoundCloudPlayer 
                url="https://on.soundcloud.com/kT53ru4Uzv45QabYxM"
                showArtwork={true}
              />
            </GlassCard>
          </div>
        </section>

        {/* Streaming Platforms */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Stream Everywhere</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {musicPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard variant="hover" className="text-center p-8">
                    <platform.icon className={`w-16 h-16 mx-auto mb-4 ${platform.color}`} />
                    <h3 className="text-xl font-semibold">{platform.name}</h3>
                  </GlassCard>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Track List */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">All Tracks</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* This would be populated from database */}
              <GlassCard>
                <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
                <p className="text-gray-400">
                  Full track listing will be available here. Check back soon for updates!
                </p>
              </GlassCard>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}