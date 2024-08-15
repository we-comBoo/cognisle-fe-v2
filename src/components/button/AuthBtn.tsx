import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useCallback } from 'react'

const AuthBtn = () => {
  const { data: session } = useSession()

  const LogoutBtn = () => {
    console.log('로그아웃 로직 작성')
    signOut({ callbackUrl: '/login' })
  }

  const renderButton = useCallback(() => {
    if (session) {
      // 로그인된 경우
      return (
        <>
          <Button onClick={LogoutBtn}>로그아웃</Button>
        </>
      )
    } else {
      // 로그 아웃된 경우
      return (
        <Button>
          <Link href="/login">로그인</Link>
        </Button>
      )
    }
  }, [session])

  return <>{renderButton()}</>
}

export default AuthBtn
const Button = styled.button`
  text-decoration: underline;
  ${FONTS.body4};
`
