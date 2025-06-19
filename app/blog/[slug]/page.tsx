import { SiteLayout } from "@/components/layout/site-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

// This would come from your database based on the slug
const post = {
  title: "The Journey to DejaVú",
  content: `
    <h2>The Beginning</h2>
    <p>Every artist has a moment when they realize their calling. For me, that moment came in the studio at 3 AM, surrounded by empty coffee cups and half-written lyrics scattered across the table.</p>
    
    <p>The journey to creating DejaVú wasn't just about making music—it was about finding my voice in a world full of noise. It was about translating experiences, emotions, and visions into something tangible that others could feel.</p>
    
    <h3>The Creative Process</h3>
    <p>My creative process is chaotic and beautiful. It starts with a feeling, a vibe that I can't shake. Sometimes it's a melody that haunts me for days, other times it's a single line that demands to be written.</p>
    
    <blockquote>
      "Art is not what you see, but what you make others see." - Edgar Degas
    </blockquote>
    
    <p>This quote has guided my approach to music. It's not enough to create something that sounds good—it needs to make people feel something, see something, experience something beyond the surface.</p>
    
    <h3>What's Next</h3>
    <p>As we move into 2025, I'm excited about the projects in the pipeline. The Dr. Phil Live Show appearance was just the beginning. There are collaborations in the works, new sounds to explore, and stories to tell.</p>
    
    <p>Stay tuned for more updates, and remember—this journey is as much yours as it is mine. Thank you for being part of it.</p>
  `,
  date: "December 15, 2024",
  author: "Thy Kyd",
  category: "Behind the Music",
  tags: ["music", "creative-process", "studio", "journey"],
  readTime: "5 min read"
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <SiteLayout>
      <div className="min-h-screen">
        <article className="max-w-4xl mx-auto px-4 py-16">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-sm text-gray-400">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-gray-400">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span>By {post.author}</span>
              </div>

              <button className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </header>

          {/* Article Content */}
          <GlassCard className="mb-12">
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </GlassCard>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-12">
            <Tag className="w-5 h-5 text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="px-3 py-1 rounded-full text-sm bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <GlassCard variant="gradient" className="mb-12">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">About {post.author}</h3>
                <p className="text-gray-300">
                  Hip hop artist, writer, and creator. Bringing unique perspectives 
                  to the culture through music and storytelling.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Related Posts */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard variant="hover" className="cursor-pointer">
                <h3 className="text-lg font-semibold mb-2">Studio Sessions: Making of 'Vibes'</h3>
                <p className="text-gray-400 text-sm">A deep dive into the production process...</p>
              </GlassCard>
              <GlassCard variant="hover" className="cursor-pointer">
                <h3 className="text-lg font-semibold mb-2">The Art of Collaboration</h3>
                <p className="text-gray-400 text-sm">Working with other artists to create magic...</p>
              </GlassCard>
            </div>
          </section>
        </article>
      </div>
    </SiteLayout>
  )
}