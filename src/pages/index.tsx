import AuthBtn from '@/components/button/AuthBtn'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Image from 'next/image'
import { Logo, Triangle } from '@/components/common'

export default function Home() {
  // 2초 뒤에 홈 메뉴 화면으로 이동
  useEffect(() => {
    setTimeout(() => {
      location.href = 'home'
    }, 2000)
  }, [])

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
