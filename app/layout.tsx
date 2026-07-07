import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DPRt MUSTIKA SARI - PSI Bekasi',
  description:
    'Platform digital Dewan Pengurus Ranting MUSTIKA SARI, PSI Kota Bekasi. Digitalisasi administrasi kepengurusan partai di tingkat ranting.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="h-screen">
      <body className={`${geist.className} antialiased bg-white h-screen overflow-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
