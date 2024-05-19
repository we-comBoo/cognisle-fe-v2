import axios from 'axios'

const BASE_URL = 'https://www.cognisle.shop'

export const axiosServer = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
//
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})
