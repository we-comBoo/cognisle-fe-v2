import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthAxios } from '../axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET': // 나의 친구 조회
      // GET 요청 처리
      return handleGet(req, res)
    default:
      // 지원하지 않는 HTTP 메서드 처리
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authAxios = await createAuthAxios(req, res)

    const response = await authAxios.get(`/friends/list/`)
    console.log('GET /friends/ 결과', response.data)

    res.status(200).json({ ...response.data })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
  //console.log('handler', req.body, req.url)
  // res.status(200).json({ name: 'heoolo' })
}
