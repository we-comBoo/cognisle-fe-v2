import AuthBtn from '@/components/button/AuthBtn'
import styled from '@emotion/styled'

export default function Home() {
  return (
    <>
      <Container>
        홈<AuthBtn />
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: rebeccapurple;
`
