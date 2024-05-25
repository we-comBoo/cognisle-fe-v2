import useLoginForm from '@/components/pages/Login/form/hook'

const LoginForm = () => {
  const route = useRouter()
  const goSignupPage = () => {
    route.push('/signup')
  }
  const { inputRefs, errorrMsg, submitLoginForm } = useLoginForm()
  rerurn(
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
        {errorrMsg.email && <p>{errorrMsg.email}</p>}
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          ref={(el) => {
            if (el !== null) inputRefs.current[1] = el
          }}
        />
        {errorrMsg.password && <p>{errorrMsg.password}</p>}
        <button type="submit">로그인 하기</button>
      </form>
    </section>,
  )
}

export default LoginForm
