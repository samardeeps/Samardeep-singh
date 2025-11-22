import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Samardeep Singh | Flutter Developer & Mobile App Engineer',
  description: 'Portfolio of Samardeep Singh - Flutter Developer specializing in Android & iOS app development with Firebase, REST APIs, and modern state management.',
  keywords: ['Flutter Developer', 'Mobile App Developer', 'Android Developer', 'iOS Developer', 'Firebase', 'Dart', 'App Development'],
  authors: [{ name: 'Samardeep Singh' }],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
