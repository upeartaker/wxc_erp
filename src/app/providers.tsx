'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

export function Providers({ children }: { children: React.ReactNode }) {
  const initTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      document.querySelector('main[data-nextui]')?.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.querySelector('main[data-nextui]')?.classList.remove('dark')
    }
    return null
  }

  useEffect(() => {
    initTheme()
  }, [])

  return (
    <NextUIProvider className={'h-full'}>
      <SessionProvider>
        <main
          data-nextui={true}
          className="text-foreground bg-background h-full"
        >
          {children}
        </main>
      </SessionProvider>
    </NextUIProvider>
  )
}
