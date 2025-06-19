import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary/30 via-background to-background text-center">
      <h1 className="text-6xl font-extrabold text-primary mb-4 drop-shadow-lg">404</h1>
      <h2 className="text-3xl font-bold mb-2 text-gold-500">Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
        Sorry, the page you are looking for does not exist.<br />
        Maybe you took a wrong turn on the beat.
      </p>
      <Link href="/" className="inline-block px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-gold-500 transition-colors">
        Back to Home
      </Link>
    </div>
  )
} 