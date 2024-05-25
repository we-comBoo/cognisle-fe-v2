import LoginForm from '@/components/pages/Login/form'

import Background from '@/components/common/background'

const Login = () => {
  return (
    <Background type="login">
      {' '}
      로그인 페이지
      <LoginForm />
    </Background>
  )
}

export default Login
