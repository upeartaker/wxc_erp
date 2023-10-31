import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

export const usePermission = () => {
  const { data } = useSession()
  const isAdmin = useMemo(() => {
    return data?.user?.role === 'admin'
  }, [data])
  return {
    isAdmin
  }
}
