import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import { useSession, signOut } from 'next-auth/react'
import { useCallback } from 'react'
const LogoutBtn = () => {
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
      return (
        <>
          <Button onClick={LogoutBtn}>로그아웃</Button>
        </>
      )
    }
  }, [session])
  return <>{renderButton()}</>
}

export default LogoutBtn

const Button = styled.button`
  color: var(--color-green-400);
  text-decoration: underline;
  ${FONTS.body4};
`
