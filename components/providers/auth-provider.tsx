'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const clerk_publishable_key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // If Clerk is not configured, just return children
  if (!clerk_publishable_key) {
    return <>{children}</>;
  }

  return (
    <ClerkProvider
      publishableKey={clerk_publishable_key}
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
      {children}
    </ClerkProvider>
  );
}