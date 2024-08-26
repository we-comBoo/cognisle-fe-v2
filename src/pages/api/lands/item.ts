// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthAxios } from '../axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { items, land_back_id } = req.body
  const data = { items, land_back_id }

  try {
    const authAxios = await createAuthAxios(req, res)

    const response = await authAxios.put(`/lands/items/`, data)
    console.log('PUT /lands/items/ 결과', data, response)

    res.status(200).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
  //console.log('handler', req.body, req.url)
  res.status(200).json({ name: 'John Doe' })
}
