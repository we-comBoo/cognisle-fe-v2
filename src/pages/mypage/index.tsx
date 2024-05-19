import useAxiosAuth from '@/hooks/useAxiosAuth'
import { axiosServer } from '@/lib'

import { useSession } from 'next-auth/react'

const Mypage = () => {
  const { data: session } = useSession()
  const axiosAuth = useAxiosAuth()

  const fetchAxiosAuth = async () => {
    const res = await axiosAuth.post('/users/token/refresh/', {
      email: session?.user.email,
      password: 12341234,
      refresh: session?.user.refresh,
    })
  }
  const fetchAxiosLogin = async () => {
    const email = '0321minji@naver.com'
    const password = '12341234'
    const res = await axiosServer.post('/users/login/', {
      email,
      password,
    })
  }
  /*
  const email = '0321minji@daum.net'
  const password = '12341234'
  const credentials = {
    email,
    password,
  }
  async function get() {
    await axiosAuth.post('/users/login/', credentials)
  }

  useEffect(() => {
    get()
  }, [])*/

  return (
    <div>
      마이페이지
      <button onClick={fetchAxiosAuth}> refresh 토큰 </button>{' '}
      <button onClick={fetchAxiosLogin}> 로그인 </button>
    </div>
  )
}

export default Mypage
