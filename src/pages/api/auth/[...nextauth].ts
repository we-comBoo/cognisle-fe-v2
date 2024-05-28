import axios from 'axios'
import { axiosAuth } from '@/lib/axios'
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
        try {
          const res = await axiosAuth.post('/users/login/', credentials)

          if (res.status === 200 && res.data) {
            const user = res.data
            return user.data
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log(
              'next Auth signin Axios Erroz',
              error?.response?.status,
              error?.response?.data,
            )
            // 서버 에러 메세지만 잡기 (401)
            throw new Error(
              error?.response?.data.detail || '로그인 오류 발생 재시도 요청',
            )
          }
        }

        /*const res = await fetch('https://www.cognisle.shop/users/login/', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })
        const data = await res.json()

 else {
          // 로그인 처리 실패
          // throw new Error('로그인 처리 실패')
          return null
        }*/
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ user, token }: { user: User; token: JWT }) {
      if (user) {
        // console.log('###', user)
        token.access = user?.access
        token.refresh = user.refresh
      }
      return token
    },
    async session({ session, token, user }) {
      session.user = token
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
})
