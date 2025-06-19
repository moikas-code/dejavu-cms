import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from '@/components/providers/auth-provider';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thy Kyd | DejaVú - Official Website",
  description: "Official website of hip hop artist Thy Kyd (DejaVú). Music, filmography, merchandise, and more.",
  keywords: ["Thy Kyd", "DejaVú", "hip hop", "music", "artist", "SoundCloud"],
  authors: [{ name: "Thy Kyd" }],
  openGraph: {
    title: "Thy Kyd | DejaVú",
    description: "Official website of hip hop artist Thy Kyd",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-white`}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}