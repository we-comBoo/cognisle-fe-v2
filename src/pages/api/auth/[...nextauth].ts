import axios from 'axios'
import { createDefatultAxios } from '@/lib/axios'
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
          const defaultAxios = createDefatultAxios()
          const res = await defaultAxios.post('/users/login/', credentials)

          if (res.status === 200 && res.data) {
            const user = res.data
            return user.data
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            /*console.log(
              'next Auth signin Axios Erroz',
              error?.response?.status,
              error?.response?.data,
            )*/
            // 400 { datail: '아이디나 비밀번호가 올바르지 않습니다.' }
            //  404 { detail: 'Not found.' }
            // 서버 에러 메세지만 잡기 (401)
            if (error.response?.status === 400) {
              throw new Error('이메일이나 비밀번호가 올바르지 않습니다.')
            } else if (error.response?.status === 404) {
              throw new Error('존재하지 않는 계정입니다.')
            } else {
              throw new Error('관리자 문의 부탁 드립니다')
            }
          } else {
            throw new Error('관리자 문의 부탁 드립니다')
          }
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ user, token }: { user: User; token: JWT }) {
      if (user) {
        //console.log('###', user)
        token.access = user?.access
        token.refresh = user.refresh
        token.pk = user.pk
      }
      //console.log('JWT', token)
      return token
    },
    async session({ session, token, user }) {
      session.user = token
      //console.log('Session', session)
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
