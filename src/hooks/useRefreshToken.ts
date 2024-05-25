import { axiosAuth } from '@/lib/axios'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export const useRefreshToken = () => {
  const { data: session } = useSession()

  const refreshToken = async () => {
    const res = await axios.post('/api/user/refresh', {
      refresh: session?.user.refresh,
    })
    console.log('useRefresh', res)

    if (session) {
      session.user.access = res.data.access
    }
  }
  return refreshToken
}
