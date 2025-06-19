import { SiteLayout } from "@/components/layout/site-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { Film, Calendar, Clock, PlayCircle } from "lucide-react"

// This would come from your database
const completedWorks = [
  {
    id: 1,
    title: "Sample Project",
    description: "A compelling story about...",
    releaseDate: "2024",
    type: "Short Film",
    thumbnail: null
  }
]

const worksInProgress = [
  {
    id: 1,
    title: "Upcoming Project",
    description: "Currently in development...",
    status: "Pre-production",
    estimatedDate: "2025",
    type: "Feature Film"
  }
]

export default function FilmsPage() {
  return (
    <SiteLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background -z-10" />
          
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Filmography</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From completed works to upcoming projects. Storytelling through a unique lens.
            </p>
          </div>
        </section>

        {/* Completed Works */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Film className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold">Completed Works</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedWorks.length > 0 ? (
                completedWorks.map((work) => (
                  <GlassCard key={work.id} variant="hover" className="overflow-hidden">
                    {work.thumbnail && (
                      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
                    )}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold">{work.title}</h3>
                        <PlayCircle className="w-6 h-6 text-accent" />
                      </div>
                      <p className="text-gray-400 mb-4">{work.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {work.releaseDate}
                        </span>
                        <span>{work.type}</span>
                      </div>
                    </div>
                  </GlassCard>
                ))
              ) : (
                <GlassCard className="col-span-2 text-center py-12">
                  <p className="text-gray-400">Completed works coming soon...</p>
                </GlassCard>
              )}
            </div>
          </div>
        </section>

        {/* Works in Progress */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Works in Progress</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {worksInProgress.length > 0 ? (
                worksInProgress.map((work) => (
                  <GlassCard key={work.id} variant="gradient">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-accent">{work.status}</span>
                      <span className="text-sm text-gray-500">{work.type}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                    <p className="text-gray-400 mb-4">{work.description}</p>
                    <p className="text-sm text-gray-500">
                      Est. {work.estimatedDate}
                    </p>
                  </GlassCard>
                ))
              ) : (
                <GlassCard className="col-span-3 text-center py-12">
                  <p className="text-gray-400">Works in progress coming soon...</p>
                </GlassCard>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GlassCard className="py-12">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
              <p className="text-gray-400 mb-6">
                Always open to new creative opportunities and partnerships.
              </p>
              <button className="button-primary">
                Get in Touch
              </button>
            </GlassCard>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}