import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}