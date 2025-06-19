# Vibe CMS - Artist Portfolio & Content Management System

A modern, macOS-inspired CMS built for hip hop artist Thy Kyd (DejaVú). Features a sleek dark theme with purple and gold accents, combining professional aesthetics with hip hop culture.

## Features

- 🎵 **Music Integration** - SoundCloud embedded player with custom styling
- 🎬 **Filmography** - Showcase completed works and works in progress
- 📅 **Event Management** - Live show listings with RSVP functionality
- 🛍️ **Merchandise Store** - Printify API integration for print-on-demand
- 📝 **Blog System** - Rich text editor with categories and tags
- 🔗 **Social Links** - Centralized social media management
- 🔐 **Authentication** - Secure admin access with Clerk
- 💾 **Database** - Supabase with Row Level Security
- 🎨 **Design** - macOS-inspired UI with frosted glass effects

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: Supabase (PostgreSQL)
- **Auth**: Clerk
- **Editor**: TipTap
- **Cache**: Redis (Upstash)
- **Payments**: Stripe
- **Runtime**: Bun

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables in `.env.local`:
   ```
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   
   # Other services...
   ```

4. Run the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Social Links

- **Instagram**: @chase13chapman81
- **Music IG**: @dejadavunci
- **Twitter/X**: @cchap13
- **Facebook**: Chase Chapman
- **SoundCloud**: DejaVú

## Project Structure

```
vibe-cms/
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── lib/             # Utilities and configurations
├── supabase/        # Database migrations
└── public/          # Static assets
```

## Database Schema

The project includes tables for:
- Music tracks
- Filmography
- Social links
- Merchandise
- Blog posts & categories
- Events & RSVPs
- Video content

All tables include RLS policies for secure data access.

## Contributing

This is a private project for Thy Kyd. For inquiries about collaboration, please reach out through the official channels.

## License

All rights reserved. This project and its content are proprietary to Thy Kyd.# dejavu-cms
