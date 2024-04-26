import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useCallback } from 'react'

const AuthBtn = () => {
  const { data: session } = useSession()

  const LogoutBtn = () => {
    console.log('로그아웃 로직 작성')
  }

  const renderButton = useCallback(() => {
    if (session) {
      // 로그인된 경우
      return (
        <>
          <button onClick={LogoutBtn}>로그아웃</button>
        </>
      )
    } else {
      // 로그 아웃된 경우
      return (
        <>
          <Link href="/auth/login">로그인</Link>
        </>
      )
    }
  }, [session])

  return <>{renderButton()}</>
}

export default AuthBtn
