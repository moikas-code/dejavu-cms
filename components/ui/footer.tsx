import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube, Music } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/chase13chapman81",
    icon: Instagram,
  },
  {
    name: "Music IG",
    href: "https://instagram.com/dejadavunci",
    icon: Instagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/cchap13",
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/chase.chapman",
    icon: Facebook,
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/dejavu",
    icon: Music,
  },
  {
    name: "YouTube",
    href: "#",
    icon: Youtube,
  },
]

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Thy Kyd</h3>
            <p className="text-gray-400">
              Hip hop artist, writer, and creator bringing unique vibes to the culture.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/music" className="text-gray-400 hover:text-white transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                  Shows
                </Link>
              </li>
              <li>
                <Link href="/merch" className="text-gray-400 hover:text-white transition-colors">
                  Merchandise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thy Kyd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}