import styled from '@emotion/styled'
import { signIn } from 'next-auth/react'

export default function Home() {
  const handleLogin = () => {
    const email = '0321minji@daum.net'
    const password = '12341234'
    signIn('credentials', {
      email,
      password,
      callbackUrl: '/', // 로그인 성공 후 리다이렉션 할 URL
    })
  }
  return (
    <>
      <Container>
        <button onClick={handleLogin}>로그인</button>
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: rebeccapurple;
`
