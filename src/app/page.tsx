import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
export default async function Home(context: any) {
  const res =  await getServerSession(authOptions)
  const { role } = res?.user ?? {}

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
