import useLoginForm from '@/components/pages/Login/form/hook'
import LOCAL_STORAGE from '@/constants/localStorageKey'
import IMAGE_ADDRESS from '@/constants/imageAddress'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import { useRef, useState, useEffect } from 'react'
const LoginForm = () => {
  const router = useRouter()
  const goSignupPage = () => {
    router.push('/signup')
  }

  const { inputRefs, errorMsg, submitLoginForm } = useLoginForm()
  const [emailFlagCheck, setEmailFlagCheck] = useState(false)
  const LS_EMAIL = localStorage.getItem('LS_EMAIL')
  const handleEmailFlagCheck = () => {
    setEmailFlagCheck((prev) => !prev)
  }
  const handleLocalStorageEmail = () => {
    if (emailFlagCheck) {
      localStorage.setItem(
        LOCAL_STORAGE['emailCheckBox'],
        inputRefs.current[0].value,
      )
    } else {
      localStorage.removeItem(LOCAL_STORAGE['emailCheckBox'])
    }
  }
  useEffect(() => {
    if (LS_EMAIL) {
      setEmailFlagCheck(true)
    }
  }, [])
  useEffect(() => {
    handleLocalStorageEmail()
  }, [emailFlagCheck])

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
          <CheckBox
            type="checkbox"
            id="rememberEmail"
            checked={emailFlagCheck}
            onChange={() => handleEmailFlagCheck()}
            imgSrc={IMAGE_ADDRESS['emailCheckBox']}
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

const CheckBox = styled.input<{ checked: boolean; imgSrc: string }>`
  border: solid 0.3rem var(--color-green-400);
  width: 2.2rem;
  height: 2.2rem;
  background-color: ${({ checked }) =>
    checked ? `var(--color-green-400)` : 'transparent'};
  background-image: ${({ checked, imgSrc }) =>
    checked ? `url(${imgSrc})` : 'none'};

  background-size: 1.5rem 1.2rem;
  background-repeat: no-repeat;
  background-position: center;
`
