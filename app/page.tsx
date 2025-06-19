import { SiteLayout } from "@/components/layout/site-layout"
import { GlassCard } from "@/components/ui/glass-card"
import Link from "next/link"

export default function Home() {
  return (
    <SiteLayout>
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 animate-fade-in">
            <span className="text-gradient">Thy Kyd</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up animation-delay-200">
            DejaVú • Artist • Creator
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <button className="button-primary">
              Listen Now
            </button>
            <button className="button-secondary">
              Explore
            </button>
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/music">
            <GlassCard variant="gradient" className="text-center cursor-pointer">
              <h3 className="text-2xl font-bold mb-2">Music</h3>
              <p className="text-gray-400">Stream on all platforms</p>
            </GlassCard>
          </Link>
          
          <Link href="/events">
            <GlassCard variant="hover" className="text-center cursor-pointer">
              <h3 className="text-2xl font-bold mb-2">Shows</h3>
              <p className="text-gray-400">Upcoming performances</p>
            </GlassCard>
          </Link>
          
          <Link href="/merch">
            <GlassCard variant="hover" className="text-center cursor-pointer">
              <h3 className="text-2xl font-bold mb-2">Merch</h3>
              <p className="text-gray-400">Official merchandise</p>
            </GlassCard>
          </Link>
        </div>
      </section>
    </main>
    </SiteLayout>
  );
}