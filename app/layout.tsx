import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'

import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
})

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js App',
    default: 'Next.js App',
  },
  description: 'A modern, professional Next.js application built with TypeScript, Tailwind CSS, and shadcn/ui components.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
