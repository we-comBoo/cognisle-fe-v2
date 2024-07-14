import { axiosAuth } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { useRefreshToken } from '@/hooks'
import { useEffect } from 'react'

const useAxiosAuth = () => {
  const { data: session } = useSession()
  const refreshToken = useRefreshToken()

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      async (config) => {
        //console.log(config.headers['Authorization'])
        await refreshToken()
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${session?.user.access}`
        }
        // console.log('config', config.headers['Authorization'])
        return config
      },
      (error) => Promise.reject(error),
    )
    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config
        console.log('Error', error.response)
        if (!prevRequest.sent) {
          prevRequest.sent = true
          await refreshToken()
          prevRequest.headers['Authorization'] =
            `Bearer ${session?.user.access}`
          // console.log('config', prevRequest)
          return axiosAuth(prevRequest)
        } else {
          return Promise.reject(error)
        }
      },
    )
    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept)
      axiosAuth.interceptors.response.eject(responseIntercept)
    }
  }, [session])
  // console.log('useAxiosHook', axiosAuth)
  return axiosAuth
}

export default useAxiosAuth
