"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/films", label: "Films" },
  { href: "/videos", label: "Videos" },
  { href: "/events", label: "Shows" },
  { href: "/blog", label: "Blog" },
  { href: "/merch", label: "Merch" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Thy Kyd
            </Link>
            
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="button-secondary px-4 py-2 text-sm">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/admin" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  )
}