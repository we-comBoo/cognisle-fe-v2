import axios, { AxiosRequestConfig } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

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
    async (config) => {
      const token = await getToken({ req })

      if (token?.access) {
        config.headers.Authorization = `Bearer ${token?.access}`
      }

      return config
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

// nextjs api
function createNextHttp() {
  const instance = axios.create({
    baseURL: '/api',
  })

  return instance
}

export { createAuthAxios, createDefatultAxios, createNextHttp }
