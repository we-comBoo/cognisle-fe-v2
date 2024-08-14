import { createAuthAxios } from '@/lib/axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.query

  try {
    const authAxios = createAuthAxios(req)

    const { data } = await authAxios.get(`/lands/?email=${email}`)
    console.log(data)

    res.status(200).json({ ...data.data })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
}
