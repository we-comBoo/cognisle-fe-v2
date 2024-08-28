import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthAxios } from '../axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const authAxios = await createAuthAxios(req, res)

    const response = await authAxios.get(`/friends/`)
    console.log('GET /friends/ 결과', response.data)

    res.status(200).json({ ...response.data })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
  //console.log('handler', req.body, req.url)
  // res.status(200).json({ name: 'heoolo' })
}
