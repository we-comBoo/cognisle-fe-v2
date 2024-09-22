import type { NextApiRequest, NextApiResponse } from 'next'
import { createDefatultAxios } from '../axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = req.body
  try {
    const defaultAxios = createDefatultAxios()

    const output = await defaultAxios.post('/users/sign_up/', {
      ...data,
    })

    res.status(200).json({ message: 'sigup success' })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
}
