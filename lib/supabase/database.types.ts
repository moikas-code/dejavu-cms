export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      music_tracks: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          artist_name: string
          audio_url: string | null
          soundcloud_url: string | null
          spotify_url: string | null
          apple_music_url: string | null
          cover_image_url: string | null
          duration: number | null
          plays: number
          featured: boolean
          release_date: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          artist_name: string
          audio_url?: string | null
          soundcloud_url?: string | null
          spotify_url?: string | null
          apple_music_url?: string | null
          cover_image_url?: string | null
          duration?: number | null
          plays?: number
          featured?: boolean
          release_date?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          artist_name?: string
          audio_url?: string | null
          soundcloud_url?: string | null
          spotify_url?: string | null
          apple_music_url?: string | null
          cover_image_url?: string | null
          duration?: number | null
          plays?: number
          featured?: boolean
          release_date?: string | null
          user_id?: string
        }
      }
      filmography: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          description: string | null
          category: 'completed' | 'in_progress'
          media_type: string | null
          release_date: string | null
          featured_image_url: string | null
          video_url: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          description?: string | null
          category: 'completed' | 'in_progress'
          media_type?: string | null
          release_date?: string | null
          featured_image_url?: string | null
          video_url?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          description?: string | null
          category?: 'completed' | 'in_progress'
          media_type?: string | null
          release_date?: string | null
          featured_image_url?: string | null
          video_url?: string | null
          user_id?: string
        }
      }
      social_links: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          platform: string
          url: string
          username: string | null
          icon: string | null
          display_order: number
          is_active: boolean
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          platform: string
          url: string
          username?: string | null
          icon?: string | null
          display_order?: number
          is_active?: boolean
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          platform?: string
          url?: string
          username?: string | null
          icon?: string | null
          display_order?: number
          is_active?: boolean
          user_id?: string
        }
      }
      merchandise: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          printify_product_id: string | null
          title: string
          description: string | null
          price: number
          currency: string
          images: string[]
          in_stock: boolean
          featured: boolean
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          printify_product_id?: string | null
          title: string
          description?: string | null
          price: number
          currency?: string
          images: string[]
          in_stock?: boolean
          featured?: boolean
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          printify_product_id?: string | null
          title?: string
          description?: string | null
          price?: number
          currency?: string
          images?: string[]
          in_stock?: boolean
          featured?: boolean
          user_id?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          featured_image: string | null
          status: 'draft' | 'published'
          published_at: string | null
          category_id: string | null
          tags: string[]
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          slug: string
          content: string
          excerpt?: string | null
          featured_image?: string | null
          status?: 'draft' | 'published'
          published_at?: string | null
          category_id?: string | null
          tags?: string[]
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string | null
          featured_image?: string | null
          status?: 'draft' | 'published'
          published_at?: string | null
          category_id?: string | null
          tags?: string[]
          user_id?: string
        }
      }
      blog_categories: {
        Row: {
          id: string
          created_at: string
          name: string
          slug: string
          description: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          slug: string
          description?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          slug?: string
          description?: string | null
        }
      }
      events: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          description: string | null
          start_date: string
          end_date: string | null
          venue: string | null
          address: string | null
          city: string | null
          ticket_price: number | null
          ticket_url: string | null
          max_attendees: number | null
          current_attendees: number
          status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
          featured_image: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          description?: string | null
          start_date: string
          end_date?: string | null
          venue?: string | null
          address?: string | null
          city?: string | null
          ticket_price?: number | null
          ticket_url?: string | null
          max_attendees?: number | null
          current_attendees?: number
          status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
          featured_image?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          description?: string | null
          start_date?: string
          end_date?: string | null
          venue?: string | null
          address?: string | null
          city?: string | null
          ticket_price?: number | null
          ticket_url?: string | null
          max_attendees?: number | null
          current_attendees?: number
          status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
          featured_image?: string | null
          user_id?: string
        }
      }
      event_rsvps: {
        Row: {
          id: string
          created_at: string
          event_id: string
          user_email: string
          user_name: string
          ticket_count: number
          payment_status: 'pending' | 'completed' | 'failed' | 'refunded'
          stripe_payment_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          event_id: string
          user_email: string
          user_name: string
          ticket_count?: number
          payment_status?: 'pending' | 'completed' | 'failed' | 'refunded'
          stripe_payment_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          event_id?: string
          user_email?: string
          user_name?: string
          ticket_count?: number
          payment_status?: 'pending' | 'completed' | 'failed' | 'refunded'
          stripe_payment_id?: string | null
        }
      }
      video_content: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          description: string | null
          video_url: string
          thumbnail_url: string | null
          category: string | null
          featured: boolean
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          description?: string | null
          video_url: string
          thumbnail_url?: string | null
          category?: string | null
          featured?: boolean
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          description?: string | null
          video_url?: string
          thumbnail_url?: string | null
          category?: string | null
          featured?: boolean
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}