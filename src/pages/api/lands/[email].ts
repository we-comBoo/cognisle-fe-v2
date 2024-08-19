import type { NextApiRequest, NextApiResponse } from 'next'
import { createDefatultAxios } from '../axios'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.query

  try {
    const defaultAxios = createDefatultAxios()

    const { data } = await defaultAxios.get(`/lands/?email=${email}`)
    console.log('GET /lands/ 결과', data)

    res.status(200).json({ ...data.data })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
}
