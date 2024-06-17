import { Background, FormBtn } from '@/components/common'
import SignupForm from '@/components/pages/Signup/form'
import Header from '@/components/pages/Signup/header'
import styled from '@emotion/styled'

const Signup = () => {
  return (
    <Background type="signup">
      <Container>
        <Header />
        <SignupForm />
      </Container>
    </Background>
  )
}

export default Signup

const Container = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  &::placeholder {
    color: var(--color-green-400);
  }
`
