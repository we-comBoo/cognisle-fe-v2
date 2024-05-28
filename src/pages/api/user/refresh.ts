import { axiosAuth } from '@/lib'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken, JWT } from 'next-auth/jwt'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // console.log('req', req)
  const response = await getToken({ req })
  // console.log('getServerSession : refresh', refresh)
  if (response?.refresh) {
    const { data } = await axiosAuth.post('/users/token/refresh/', {
      refresh: response?.refresh,
    })
    res.status(200).json({ access: data.access })
  } else {
    res.status(404).json({ message: '토큰발급 오류 발생' })
  }

  // console.log('get access token by refresh token API ', data)
}
