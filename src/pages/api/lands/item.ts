// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ItemProps } from '@/types/island'
import { createAuthAxios } from '../axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { items, land } = req.body
  /*
  const itemsArr = items.map(
    ({ no, locations: { x, y, z, show } }: ItemProps) => ({
      no,
      x,
      y,
      z,
      show,
    }),
  )
  const data = { land_back_id: land.type, items: itemsArr }

  try {
    const authAxios = await createAuthAxios(req, res)

    const response = await authAxios.put(`/lands/items/`, data)
    console.log('PUT /lands/items/ 결과', data, response)

    res.status(200).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }*/
  //console.log('handler', req.body, req.url)
  res.status(200).json({ name: 'John Doe' })
}

/*


{
    "locations":[
        {
            "item_no":1,
            "x":10,
            "y":11,
            "z":20
        },
        {
            "item_no":20,
            "x":20,
            "y":11,
            "z":3
        }
    ],"land_back_id":2

}

*/
