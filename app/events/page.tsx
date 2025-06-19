import { SiteLayout } from "@/components/layout/site-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { Calendar, MapPin, Ticket, Clock } from "lucide-react"

// This would come from your database
const upcomingEvents = [
  {
    id: 1,
    title: "Summer Vibes Tour",
    date: "July 15, 2025",
    time: "8:00 PM",
    venue: "The Forum",
    city: "Los Angeles, CA",
    ticketPrice: 45,
    status: "On Sale"
  }
]

const pastEvents = [
  {
    id: 1,
    title: "Dr. Phil Live Show",
    date: "July 2024",
    venue: "Comedy Store",
    city: "Los Angeles, CA",
    highlights: "Special appearance with Adam Ray"
  }
]

export default function EventsPage() {
  return (
    <SiteLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background -z-10" />
          
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Live Shows</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Catch Thy Kyd live. Energy, vibes, and unforgettable performances.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-accent" />
              Upcoming Shows
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <GlassCard key={event.id} variant="gradient" className="overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold">{event.title}</h3>
                        <span className="bg-accent text-black px-3 py-1 rounded-full text-sm font-medium">
                          {event.status}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-300">
                          <Calendar className="w-5 h-5" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <Clock className="w-5 h-5" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <MapPin className="w-5 h-5" />
                          <span>{event.venue}, {event.city}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <Ticket className="w-5 h-5" />
                          <span>From ${event.ticketPrice}</span>
                        </div>
                      </div>
                      
                      <button className="button-primary w-full">
                        Get Tickets
                      </button>
                    </div>
                  </GlassCard>
                ))
              ) : (
                <GlassCard className="col-span-2 text-center py-12">
                  <p className="text-gray-400 mb-4">No upcoming shows at the moment.</p>
                  <p className="text-gray-500">Check back soon for new dates!</p>
                </GlassCard>
              )}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Past Shows</h2>
            
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <GlassCard key={event.id} variant="hover">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-400 mb-2">{event.highlights}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{event.date}</span>
                        <span>•</span>
                        <span>{event.venue}, {event.city}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Never Miss a Show</h3>
              <p className="text-gray-400 mb-6">
                Get notified about new tour dates and exclusive pre-sales.
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
            </GlassCard>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}