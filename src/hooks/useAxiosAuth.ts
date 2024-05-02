import { axiosAuth } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

const useAxiosAuth = () => {
  const { data: session } = useSession()

  console.log(session)

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use((config) => {
      console.log(config.headers['Authorization'])
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${session?.user.access}`
      }
      console.log(config.headers['Authorization'])
      return config
    })
    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept)
    }
  }, [session])
  return axiosAuth
}

export default useAxiosAuth
