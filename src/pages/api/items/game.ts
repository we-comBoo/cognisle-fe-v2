// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ItemProps } from '@/types/island'
import { createAuthAxios } from '../axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const item_nos = req.body
  console.log(item_nos)

  try {
    const authAxios = await createAuthAxios(req, res)

    const response = await authAxios.put(`/lands/items/game/`, {
      item_nos: item_nos,
    })
    console.log('PUT /lands/items/game/ 결과', response)

    res.status(200).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
  //console.log('handler', req.body, req.url)
  // res.status(200).json({ name: 'heoolo' })
}
