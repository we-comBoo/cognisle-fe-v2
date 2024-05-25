import useAxiosAuth from '@/hooks/useAxiosAuth'
import { useRefreshToken } from '@/hooks/useRefreshToken'
import { axiosServer } from '@/lib'

import { useSession } from 'next-auth/react'

const Mypage = () => {
  const { data: session } = useSession()
  const refreshToken = useRefreshToken()

  async function getMyInfo(): Promise<void> {
    const response = await refreshToken()
    console.log(response)
  }

  return (
    <div>
      마이페이지
      <button onClick={getMyInfo}> 나의 정보 보기 </button>
    </div>
  )
}

export default Mypage
