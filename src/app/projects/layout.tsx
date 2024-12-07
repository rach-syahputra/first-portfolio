import { Metadata } from 'next'
import { Geist } from 'next/font/google'
import '@/app/globals.css'

const geist = Geist({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-geist'
})

export const metadata: Metadata = {
  title: 'Rachmat Syahputra',
  description: 'Rachmat Syahputra`s portfolio website',
  icons: '/r-icon.jpg'
}

export default function ProjectDetailLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geist.variable} bg-dark text-light antialiased`}>
        <div className='mx-auto w-full max-w-screen-lg p-4 lg:px-0 lg:py-8'>
          {children}
        </div>
      </body>
    </html>
  )
}
