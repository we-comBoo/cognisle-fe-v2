// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthAxios } from '../axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.body
  console.log(email)

  try {
    const authAxios = await createAuthAxios(req, res)

    const response = await authAxios.post(`/friends/request/reject/`, {
      ...email,
    })
    console.log('POST /friends/request/reject/ 결과', response)

    res.status(200).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
}
