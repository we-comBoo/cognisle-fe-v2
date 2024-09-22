import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthAxios } from '../axios'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.method)
  if (req.method === 'POST') {
    const { email } = req.body
    console.log('GET /friends/email/ 결과', email)
    try {
      const authAxios = await createAuthAxios(req, res)

      const response = await authAxios.get(`/friends/?email=${email}`)
      console.log('GET /friends/email/ 결과', response, email)

      res.status(200).json({ ...response.data })
    } catch (error) {
      console.log(error)
      res.status(404).json({ data: error })
    }
  } else {
    res.status(404).json({ data: 'method not found' })
  }
}
