import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hawaii Surf Blog',
  description: 'Your guide to Hawaii\'s legendary surf culture, conditions, and spots. Real-time surf reports, gear reviews, and expert guides from local surfers.',
  keywords: 'Hawaii surf, surf reports, Pipeline, Waikiki, surf conditions, Hawaiian waves, surf blog',
  authors: [{ name: 'Hawaii Surf Blog' }],
  openGraph: {
    title: 'Hawaii Surf Blog',
    description: 'Your guide to Hawaii\'s legendary surf culture, conditions, and spots.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawaii Surf Blog',
    description: 'Your guide to Hawaii\'s legendary surf culture, conditions, and spots.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
          <CosmicBadge bucketSlug={bucketSlug} />
        </div>
      </body>
    </html>
  )
}