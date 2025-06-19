-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Function to extract Clerk user ID from JWT
CREATE OR REPLACE FUNCTION requesting_user_id() 
RETURNS TEXT AS $$
  SELECT NULLIF(
    current_setting('request.jwt.claims', true)::json->>'sub',
    ''
  )::text;
$$ LANGUAGE SQL STABLE;

-- Music tracks table
CREATE TABLE music_tracks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  artist_name TEXT NOT NULL,
  audio_url TEXT,
  soundcloud_url TEXT,
  spotify_url TEXT,
  apple_music_url TEXT,
  cover_image_url TEXT,
  duration INTEGER,
  plays INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  release_date DATE,
  user_id TEXT NOT NULL
);

-- Filmography table
CREATE TABLE filmography (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('completed', 'in_progress')),
  media_type TEXT,
  release_date DATE,
  featured_image_url TEXT,
  video_url TEXT,
  user_id TEXT NOT NULL
);

-- Social links table
CREATE TABLE social_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  platform TEXT NOT NULL,
  url TEXT NOT NULL,
  username TEXT,
  icon TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  user_id TEXT NOT NULL
);

-- Merchandise table
CREATE TABLE merchandise (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  printify_product_id TEXT,
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  images TEXT[] DEFAULT '{}',
  in_stock BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  user_id TEXT NOT NULL
);

-- Blog categories table
CREATE TABLE blog_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT
);

-- Blog posts table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMPTZ,
  category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
  tags TEXT[] DEFAULT '{}',
  user_id TEXT NOT NULL
);

-- Events table
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT,
  start_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ,
  venue TEXT,
  address TEXT,
  city TEXT,
  ticket_price DECIMAL(10,2),
  ticket_url TEXT,
  max_attendees INTEGER,
  current_attendees INTEGER DEFAULT 0,
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')),
  featured_image TEXT,
  user_id TEXT NOT NULL
);

-- Event RSVPs table
CREATE TABLE event_rsvps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  user_name TEXT NOT NULL,
  ticket_count INTEGER DEFAULT 1,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  stripe_payment_id TEXT,
  UNIQUE(event_id, user_email)
);

-- Video content table
CREATE TABLE video_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  category TEXT,
  featured BOOLEAN DEFAULT false,
  user_id TEXT NOT NULL
);

-- Create indexes
CREATE INDEX idx_music_tracks_user_id ON music_tracks(user_id);
CREATE INDEX idx_music_tracks_featured ON music_tracks(featured);
CREATE INDEX idx_filmography_user_id ON filmography(user_id);
CREATE INDEX idx_filmography_category ON filmography(category);
CREATE INDEX idx_social_links_user_id ON social_links(user_id);
CREATE INDEX idx_merchandise_user_id ON merchandise(user_id);
CREATE INDEX idx_blog_posts_user_id ON blog_posts(user_id);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_events_user_id ON events(user_id);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_event_rsvps_event_id ON event_rsvps(event_id);
CREATE INDEX idx_video_content_user_id ON video_content(user_id);

-- Row Level Security policies
ALTER TABLE music_tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE filmography ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE merchandise ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE video_content ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public can view published music" ON music_tracks
  FOR SELECT USING (true);

CREATE POLICY "Public can view filmography" ON filmography
  FOR SELECT USING (true);

CREATE POLICY "Public can view active social links" ON social_links
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view in-stock merchandise" ON merchandise
  FOR SELECT USING (in_stock = true);

CREATE POLICY "Public can view published blog posts" ON blog_posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Public can view blog categories" ON blog_categories
  FOR SELECT USING (true);

CREATE POLICY "Public can view upcoming/ongoing events" ON events
  FOR SELECT USING (status IN ('upcoming', 'ongoing'));

CREATE POLICY "Public can view video content" ON video_content
  FOR SELECT USING (true);

-- User-specific write access
CREATE POLICY "Users can manage their own music" ON music_tracks
  FOR ALL USING (user_id = requesting_user_id());

CREATE POLICY "Users can manage their own filmography" ON filmography
  FOR ALL USING (user_id = requesting_user_id());

CREATE POLICY "Users can manage their own social links" ON social_links
  FOR ALL USING (user_id = requesting_user_id());

CREATE POLICY "Users can manage their own merchandise" ON merchandise
  FOR ALL USING (user_id = requesting_user_id());

CREATE POLICY "Users can manage their own blog posts" ON blog_posts
  FOR ALL USING (user_id = requesting_user_id());

CREATE POLICY "Users can manage their own events" ON events
  FOR ALL USING (user_id = requesting_user_id());

CREATE POLICY "Users can manage their own video content" ON video_content
  FOR ALL USING (user_id = requesting_user_id());

-- Public can create RSVPs
CREATE POLICY "Public can create RSVPs" ON event_rsvps
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can view their own RSVPs" ON event_rsvps
  FOR SELECT USING (true);

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply update timestamp triggers
CREATE TRIGGER update_music_tracks_updated_at BEFORE UPDATE ON music_tracks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_filmography_updated_at BEFORE UPDATE ON filmography
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_social_links_updated_at BEFORE UPDATE ON social_links
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_merchandise_updated_at BEFORE UPDATE ON merchandise
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_video_content_updated_at BEFORE UPDATE ON video_content
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();