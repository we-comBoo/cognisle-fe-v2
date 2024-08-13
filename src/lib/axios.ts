import axios from 'axios'
import { getSession } from 'next-auth/react'
import type { NextApiRequest } from 'next'

const BASE_URL = 'https://www.cognisle.shop'

// 쿠키에 저장된 토큰을 인증 헤더에 자동으로 추가하여 요청을 보낼 수 있습니다.
function createAuthAxios(req: NextApiRequest) {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      withCredentials: true,
    },
  })

  instance.interceptors.request.use(
    async (request) => {
      const session = await getSession({ req })

      if (session?.user.access) {
        // console.log('setSession', `Bearer ${session?.user.access}`)
        request.headers.Authorization = `Bearer ${session?.user.access}`
      }

      return request
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  return instance
}

// 쿠키에 저장된 토큰을 인증 헤더에 없이 서버에 요청 보내기
function createDefatultAxios() {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
  })

  return instance
}

export { createAuthAxios, createDefatultAxios }
