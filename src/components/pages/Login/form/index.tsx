import useLoginForm from '@/components/pages/Login/form/hook'
import { useRouter } from 'next/router'

const LoginForm = () => {
  const router = useRouter()
  const goSignupPage = () => {
    router.push('/signup')
  }

  const { inputRefs, errorMsg, submitLoginForm } = useLoginForm()
  return (
    <section onSubmit={submitLoginForm}>
      <form>
        <label>이메일</label>
        <input
          id="email"
          type="text"
          ref={(el) => {
            if (el !== null) inputRefs.current[0] = el
          }}
        />
        {errorMsg.email && <p>{errorMsg.email}</p>}
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          ref={(el) => {
            if (el !== null) inputRefs.current[1] = el
          }}
        />
        {errorMsg.password && <p>{errorMsg.password}</p>}
        <button type="submit">로그인 하기</button>
      </form>
    </section>
  )
}

export default LoginForm
