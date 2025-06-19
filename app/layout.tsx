import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#6B46C1',
          colorBackground: '#0A0A0A',
          colorInputBackground: '#1A1A1A',
          colorInputText: '#FFFFFF',
          borderRadius: '0.75rem'
        },
        elements: {
          formButtonPrimary: 'bg-primary hover:bg-primary-light',
          card: 'bg-surface backdrop-blur-md border-white/10',
        }
      }}
    >
      <html lang="en" className="dark">
        <body className={`${inter.variable} font-sans antialiased bg-background text-white`}>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}