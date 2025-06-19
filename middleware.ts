import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Only import Clerk if it's configured
const clerk_key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

let clerkMiddleware: any;
let createRouteMatcher: any;

if (clerk_key) {
  const clerkImports = require('@clerk/nextjs/server');
  clerkMiddleware = clerkImports.clerkMiddleware;
  createRouteMatcher = clerkImports.createRouteMatcher;
}

const isProtectedRoute = clerk_key ? createRouteMatcher([
  '/admin(.*)',
  '/api/admin(.*)',
]) : () => false;

export default function middleware(req: NextRequest) {
  // If Clerk is not configured, skip authentication
  if (!clerk_key) {
    // Still block admin routes if Clerk is not configured
    if (req.nextUrl.pathname.startsWith('/admin') || req.nextUrl.pathname.startsWith('/api/admin')) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
  }

  // Use Clerk middleware if configured
  return clerkMiddleware(async (auth: any, req: NextRequest) => {
    if (isProtectedRoute(req)) {
      await auth.protect();
    }
  })(req);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}