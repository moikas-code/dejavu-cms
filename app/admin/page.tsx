"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { 
  Music, 
  Film, 
  Calendar, 
  ShoppingBag,
  TrendingUp,
  Users,
  DollarSign,
  Eye
} from "lucide-react"
import { useUser } from "@clerk/nextjs"

const stats = [
  { label: "Total Plays", value: "125.4K", icon: Music, trend: "+12.5%" },
  { label: "Events This Month", value: "3", icon: Calendar, trend: "+2" },
  { label: "Merch Sales", value: "$2,847", icon: DollarSign, trend: "+23.1%" },
  { label: "Page Views", value: "45.2K", icon: Eye, trend: "+18.7%" },
]

const quickActions = [
  { label: "Add New Track", href: "/admin/music/new", icon: Music },
  { label: "Create Event", href: "/admin/events/new", icon: Calendar },
  { label: "Write Blog Post", href: "/admin/blog/new", icon: Film },
  { label: "Add Product", href: "/admin/merch/new", icon: ShoppingBag },
]

export default function AdminDashboard() {
  const { user } = useUser()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.firstName || "Artist"}
        </h1>
        <p className="text-gray-400">
          Here's what's happening with your content today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <GlassCard key={stat.label} variant="hover">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-accent mt-1">{stat.trend}</p>
              </div>
              <stat.icon className="w-8 h-8 text-primary opacity-50" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Quick Actions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <a key={action.label} href={action.href}>
              <GlassCard variant="hover" className="text-center cursor-pointer">
                <action.icon className="w-12 h-12 mx-auto mb-3 text-accent" />
                <p className="font-medium">{action.label}</p>
              </GlassCard>
            </a>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <GlassCard>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <div>
                <p className="font-medium">New track played 1,234 times</p>
                <p className="text-sm text-gray-400">2 hours ago</p>
              </div>
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <div>
                <p className="font-medium">5 new RSVPs for Summer Tour</p>
                <p className="text-sm text-gray-400">5 hours ago</p>
              </div>
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Merch order completed - $89.99</p>
                <p className="text-sm text-gray-400">1 day ago</p>
              </div>
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  )
}