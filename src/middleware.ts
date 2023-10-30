import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if(req.nextUrl.pathname.includes('/api/test')){
        return true
      }
      console.log(1111,token)
      return !!token?.user
    }
  }
})

export const config = { matcher: ['/:path*'] }
