import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname.includes('/api/test')) {
        return true
      }
      if (req.nextUrl.pathname.includes('admin')) {
        return token?.user.role === 'admin'
      }
      return !!token?.user
    }
  }
})

export const config = { matcher: ['/:path*'] }
