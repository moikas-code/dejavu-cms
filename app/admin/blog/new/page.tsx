"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { GlassCard } from "@/components/ui/glass-card"
import { TiptapEditor } from "@/components/editor/tiptap-editor"
import { ArrowLeft, Save, Eye } from "lucide-react"
import Link from "next/link"

export default function NewBlogPost() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    status: "draft"
  })

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would save to your database
    console.log("Saving post:", formData)
    // router.push('/admin/blog')
  }

  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog Posts
        </Link>
        
        <h1 className="text-3xl font-bold">Create New Blog Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <GlassCard>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                    placeholder="Enter post title..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                    placeholder="post-url-slug"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Excerpt</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none resize-none"
                    rows={3}
                    placeholder="Brief description of your post..."
                  />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <label className="block text-sm font-medium mb-4">Content</label>
              <TiptapEditor
                content={formData.content}
                onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                placeholder="Start writing your post..."
              />
            </GlassCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Publish</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 button-secondary flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button
                    type="submit"
                    className="flex-1 button-primary flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Categories & Tags</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                  >
                    <option value="">Select category...</option>
                    <option value="behind-the-music">Behind the Music</option>
                    <option value="studio">Studio</option>
                    <option value="news">News</option>
                    <option value="lifestyle">Lifestyle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tags</label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                    placeholder="music, hip-hop, studio (comma separated)"
                  />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Featured Image</h3>
              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                <p className="text-gray-400 text-sm">
                  Drag and drop or click to upload
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </form>
    </div>
  )
}