import { axiosAuth } from '@/lib'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
// This is an example of how to read a JSON Web Token from an API route
import { getToken } from 'next-auth/jwt'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // console.log('req', req)
  const { refresh } = await getToken({ req })
  // console.log('getServerSession : refresh', refresh)
  const { data } = await axiosAuth.post('/users/token/refresh/', {
    refresh,
  })
  // console.log('get access token by refresh token API ', data)

  res.status(200).json({ access: data.access })
}
