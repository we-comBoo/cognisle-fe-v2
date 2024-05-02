import axios from '@/lib/axios'
import NextAuth, { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await axios.post('/users/login/', credentials)
        /*const res = await fetch('https://www.cognisle.shop/users/login/', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })
        const data = await res.json()*/

        // console.log(res.data)
        if (res.status === 200 && res.data) {
          const user = res.data
          // console.log('&&&', user.data)
          return user.data
        } else {
          // 로그인 처리 실패
          // throw new Error('로그인 처리 실패')
          return null
        }
      },
    }),
  ],
  secret: 'say_lalisa_love_me_lalisa_love_me_hey',
  callbacks: {
    async jwt({ user, token }: { user: User; token: JWT }) {
      if (user) {
        // console.log('###', user)
        token.access = user?.access
        token.refresh = user.refresh
      }
      return token
    },
    async session({ session, token }) {
      session.user = token
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
  },
})
