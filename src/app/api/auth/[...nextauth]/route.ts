import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/db'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        account: { type: 'string', label: 'account' },
        password: { type: 'string', label: 'password' }
      },
      id: 'account-auth',
      name: 'account-auth',
      async authorize(credentials, req) {
        const account = credentials?.account
        const pass = credentials?.password
        if (!account || !pass) {
          return null
        }
        const user = await prisma.user.findFirst({
          where: {
            account: account
          }
        })
        if (!user) {
          return null
        }
        if (user?.password !== pass) {
          return null
        }
        return {
          id: user.id.toString(),
          name: user.name,
          account: user.account,
          role: user.role
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log(2222222, token, user)
      if (user) {
        token.user = user
      }
      return token
    },
    async session({ session, token }) {
      console.log(333333, token, session)
      session.user = token.user
      return session
    }
  }
})
export { handler as GET, handler as POST }
