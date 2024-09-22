// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthAxios } from '../axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.body
  const data = { email }

  try {
    const authAxios = await createAuthAxios(req, res)

    const response = await authAxios.post(`/lands/likes/`, data)
    console.log('PUT /lands/likes/ 결과', data, response.data)

    res.status(200).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
}
