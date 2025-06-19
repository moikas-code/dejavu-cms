import { Navbar } from "@/components/ui/navbar"
import Link from "next/link"
import { 
  LayoutDashboard, 
  Music, 
  Film, 
  Calendar, 
  ShoppingBag, 
  Link as LinkIcon,
  FileText,
  Settings
} from "lucide-react"

const adminNavItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/music", label: "Music", icon: Music },
  { href: "/admin/films", label: "Films", icon: Film },
  { href: "/admin/events", label: "Events", icon: Calendar },
  { href: "/admin/blog", label: "Blog", icon: FileText },
  { href: "/admin/merch", label: "Merch", icon: ShoppingBag },
  { href: "/admin/social", label: "Social Links", icon: LinkIcon },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-background-secondary border-r border-white/10">
          <nav className="p-4 space-y-1">
            {adminNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </>
  )
}