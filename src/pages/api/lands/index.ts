import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('land API req', req.query)
  res.status(200).json({ name: 'John Doe' })
}
