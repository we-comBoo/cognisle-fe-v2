import { createAuthAxios } from '@/lib/axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { user_id } = req.query

  try {
    const authAxios = createAuthAxios(req)

    const { data } = await authAxios.get(`/lands/${user_id}/`)
    console.log(data)

    res.status(200).json({ data: data.data })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
}
