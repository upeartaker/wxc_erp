'use client'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Home(context: any) {
  const { data, status } = useSession()
  if (status === 'loading') return <div>loading</div>
  const { role } = data?.user ?? {}
  switch (role) {
    case 'admin':
      redirect('/admin')
      break
    case 'user':
      redirect('/client')
      break
    default:
      redirect('/404')
      break
  }
  return <div>404</div>
}
