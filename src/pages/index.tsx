import AuthBtn from '@/components/button/AuthBtn'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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
        기본 메뉴 화면
        {/*
        홈<AuthBtn />
        <button onClick={() => router.push('/mypage')}>zmff</button>*/}
      </Container>
    </>
  )
}

const Container = styled.div``
