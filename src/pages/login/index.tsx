import LoginForm from '@/components/pages/Login/form'
import { Background, Logo } from '@/components/common'
import styled from '@emotion/styled'

const Login = () => {
  return (
    <Background type="login">
      <Container>
        <Logo type="primary" />
        <LoginForm />
      </Container>
    </Background>
  )
}

export default Login

const Container = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9.6rem;
`
