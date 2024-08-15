import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import { signOut } from 'next-auth/react'

import { useRouter } from 'next/router'
const LogoutBtn = () => {
  const router = useRouter()

  const LogoutBtn = () => {
    // console.log('로그아웃 로직 작성')
    signOut({ callbackUrl: '/login' })
    //router.reload()
  }

  return (
    <>
      <Button onClick={LogoutBtn}>로그아웃</Button>
    </>
  )
}

export default LogoutBtn

const Button = styled.button`
  color: var(--color-green-400);
  text-decoration: underline;
  ${FONTS.body4};
`
