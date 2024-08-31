import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthAxios } from '../axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET': // 나에게 친구 신청 보낸 사람 조회
      return handleGet(req, res)
    case 'POST': // 친구 요청 보내기
      // POST 요청 처리
      return handlePost(req, res)
    default:
      // 지원하지 않는 HTTP 메서드 처리
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authAxios = await createAuthAxios(req, res)

    const response = await authAxios.get(`/friends/request/`)
    console.log('GET /friends/request/ 결과', response.data)

    res.status(200).json({ ...response.data })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
  //console.log('handler', req.body, req.url)
  // res.status(200).json({ name: 'heoolo' })
}

export async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authAxios = await createAuthAxios(req, res)
    const email = req.body
    console.log(email)
    const response = await authAxios.post(`/friends/`, { ...email })
    console.log('post /friends/ 결과', response.data)

    res.status(200).json({ ...response.data })
  } catch (error) {
    console.log(error)
    res.status(404).json({ data: error })
  }
  //console.log('handler', req.body, req.url)
  // res.status(200).json({ name: 'heoolo' })
}
