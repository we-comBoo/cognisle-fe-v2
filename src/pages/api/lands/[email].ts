import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthAxios } from '../axios'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.query

  try {
    const authAxios = createAuthAxios(req, res)

    const { data } = await authAxios.get(`/lands/?email=${email}`)
    console.log('GET /lands/items/ 결과', data)

    res.status(200).json({ ...data.data })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
}
