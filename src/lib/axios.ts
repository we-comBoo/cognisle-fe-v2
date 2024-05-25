import axios from 'axios'

const BASE_URL = 'https://www.cognisle.shop'

export const axiosServer = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
})
//
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})
