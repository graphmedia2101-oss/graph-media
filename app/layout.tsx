import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://graph-media.vercel.app'),

  title: 'GRAPH MEDIA | Premium Branding Agency',

  description:
    'GRAPH MEDIA transforms businesses through luxury branding, creative design, premium printing, and modern digital experiences. Crafting Premium Brand Experiences.',

  keywords: [
    'branding agency',
    'logo design',
    'brand identity',
    'packaging design',
    'printing services',
    'luxury branding',
  ],

  generator: 'GRAPH MEDIA',

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  openGraph: {
    title: 'GRAPH MEDIA | Premium Branding Agency',

    description:
      'Crafting Premium Brand Experiences through luxury branding and creative design.',

    url: 'https://graph-media.vercel.app',

    siteName: 'GRAPH MEDIA',

    images: [
      {
        url: '/graph-media-preview.png',
        width: 1200,
        height: 630,
        alt: 'GRAPH MEDIA Preview',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'GRAPH MEDIA | Premium Branding Agency',

    description:
      'Crafting Premium Brand Experiences through luxury branding and creative design.',

    images: ['/graph-media-preview.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
