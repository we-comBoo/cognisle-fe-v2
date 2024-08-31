import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthAxios } from '../axios'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.body
  console.log('GET /friends/email/ 결과', email)
  try {
    const authAxios = await createAuthAxios(req, res)

    const { data } = await authAxios.get(`/friends/?email=${email}`)
    console.log('GET /friends/email/ 결과', data, email)

    res.status(200).json({ ...data })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
}
