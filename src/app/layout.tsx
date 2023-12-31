import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import { Providers } from '@/app/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WCX',
  description: 'WCX'
}

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  )
}
