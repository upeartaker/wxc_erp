import { Session, User, DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { DefaultUser } from 'next-auth/src/core/types'
import { ISODateString } from 'next-auth/core/types'

interface User extends DefaultUser {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  address?: string | null
  streamKey?: string | null
}

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    address?: string | null
    streamKey?: string | null
  }

  interface Session extends DefaultSession {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      address?: string | null
      streamKey?: string | null
    }
    expires: ISODateString
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    user: User
  }
}
