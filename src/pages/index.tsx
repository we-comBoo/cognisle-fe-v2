import styled from '@emotion/styled'

import { useEffect } from 'react'

import { Logo, Triangle } from '@/components/common'
import { useTimer } from '@/hooks'

export default function Home() {
  // 2초 뒤에 홈 메뉴 화면으로 이동

  useTimer(2000, () => (location.href = 'home'))

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
