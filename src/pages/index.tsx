import AuthBtn from '@/components/button/AuthBtn'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Container>
        홈<AuthBtn />
        <button onClick={() => router.push('/mypage')}>zmff</button>
      </Container>
    </>
  )
}

const Container = styled.div``
