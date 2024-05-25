import useLoginForm from '@/components/pages/Login/form/hook'
import { useRouter } from 'next/router'
import { useRef } from 'react'
const LoginForm = () => {
  const router = useRouter()
  const goSignupPage = () => {
    router.push('/signup')
  }

  const { inputRefs, errorMsg, submitLoginForm } = useLoginForm()
  const checkBoxRef = useRef<HTMLInputElement>(null)

  const handleEmailFlagCheck = () => {
    const emailFlagCheck = checkBoxRef.current.checked
    // console.log(emailFlagCheck, inputRefs.current[0].value)
    if (emailFlagCheck) {
      localStorage.setItem('LS_EMAIL', inputRefs.current[0].value)
    } else {
      localStorage.removeItem('LS_EMAIL')
    }
  }

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
          defaultValue={localStorage.getItem('LS_EMAIL')}
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
        <div>
          <input
            type="checkbox"
            id="rememberEmail"
            ref={checkBoxRef}
            defaultChecked={false}
            onChange={handleEmailFlagCheck}
          />
          <label htmlFor="rememberId">아이디 기억하기</label>
        </div>
        <button type="submit">로그인 하기</button>
      </form>
      <div>
        <button type="button" onClick={goSignupPage}>
          {' '}
          회원가입
        </button>
      </div>
    </section>
  )
}

export default LoginForm
