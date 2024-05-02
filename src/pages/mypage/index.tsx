import useAxiosAuth from '@/hooks/useAxiosAuth'
import axios from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

const Mypage = () => {
  const { data: session } = useSession()
  const axiosAuth = useAxiosAuth()
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

  return <div>마이페이지</div>
}

export default Mypage
