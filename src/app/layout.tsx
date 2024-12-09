import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-geist',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Rachmat Syahputra',
  description: "Rachmat Agung Syahputra's personal website",
  icons: '/app-icon.png'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geist.variable} bg-dark text-light antialiased`}>
        {children}
      </body>
    </html>
  )
}
