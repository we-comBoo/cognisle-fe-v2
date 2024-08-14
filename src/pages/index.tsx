import styled from '@emotion/styled'

import Logo from '@/components/common/Logo'
import Triangle from '@/components/common/Triangle'
import { useTimer } from '@/hooks'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function Home() {
  // 2초 뒤에 홈 메뉴 화면으로 이동
  const router = useRouter()
  const { data: session } = useSession()

  useTimer(2000, () =>
    session?.user.access ? router.push('/home') : router.push('/login'),
  )

  return (
    <>
      <Container>
        <Triangle type="original" />
        <Logo type="primary" />
        <Triangle type="reversed" />
      </Container>
    </>
  )
}

const Container = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
