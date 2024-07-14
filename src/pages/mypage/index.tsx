import { useRefreshToken, useAxiosAuth } from '@/hooks'
import { axiosServer } from '@/lib'
import AuthBtn from '@/components/button/AuthBtn'
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
      <AuthBtn />
    </div>
  )
}

export default Mypage
