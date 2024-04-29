import { User } from '@/types/user'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    email: User['email']
    access: User['access']
    refresh: User['refresh']
    nickname: User['nickname']
    exp: number
    iat: number
    jti: string
  }
}

import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    /** The user's postal address. */
    email: User['email']
    access: User['access']
    refresh: User['refresh']
    nickname: User['nickname']
  }
}
