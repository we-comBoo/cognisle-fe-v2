import { useSession } from 'next-auth/react'

const Mypage = () => {
  const { data: session } = useSession()

  return <div>마이페이지s</div>
}

export default Mypage
