// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ItemProps } from '@/types/island'
import { createAuthAxios } from '../axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { items, land } = req.body
  const itemsArr = items.map(({ no, locations: { x, y, z } }: ItemProps) => ({
    item_no: no,
    x,
    y,
    z,
  }))
  const land_id = land.type
  const body = { locations: itemsArr, land_back_id: land_id }
  const body1 = {
    locations: [
      { item_no: 1, x: 314, y: 364, z: 83 },
      { item_no: 10, x: 153, y: 351, z: 82 },
      { item_no: 12, x: 0, y: 0, z: 0 },
      { item_no: 20, x: 213, y: 285, z: 81 },
    ],
    land_back_id: 3,
  }
  try {
    const authAxios = createAuthAxios(req, res)
    // const session = await getCsrfToken({ req })
    const response = await authAxios.put(`/lands/items/`, { ...body1 })
    console.log('PUT /lands/items/ 결과', response)

    res.status(200).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
  //console.log('handler', req.body, req.url)
  //res.status(200).json({ name: 'John Doe' })
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
