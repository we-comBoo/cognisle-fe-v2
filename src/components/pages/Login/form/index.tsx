import useLoginForm from '@/components/pages/Login/form/hook'
import { LOCAL_STORAGE, IMAGE_ADDRESS } from '@/constants'

import { St } from './style'
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
    <St.Section onSubmit={submitLoginForm}>
      <St.Form>
        <St.Input
          id="email"
          type="text"
          placeholder="이메일"
          name="email"
          autoComplete="email"
          ref={(el) => {
            if (el !== null) inputRefs.current[0] = el
          }}
          defaultValue={localStorage.getItem('LS_EMAIL')}
        />
        {errorMsg.email && <p>{errorMsg.email}</p>}

        <St.Input
          id="password"
          type="password"
          placeholder="비밀번호"
          name="password"
          autoComplete="current-password"
          ref={(el) => {
            if (el !== null) inputRefs.current[1] = el
          }}
        />
        {errorMsg.password && <p>{errorMsg.password}</p>}
        <St.CheckBoxWrapper>
          <St.CheckBox
            type="checkbox"
            id="rememberEmail"
            checked={emailFlagCheck}
            onChange={() => handleEmailFlagCheck()}
            imgSrc={IMAGE_ADDRESS['emailCheckBox']}
          />
          <label htmlFor="rememberId">아이디 기억하기</label>
        </St.CheckBoxWrapper>
        <button type="submit">로그인 하기</button>
      </St.Form>

      <St.Link type="button" onClick={goSignupPage}>
        {' '}
        회원가입
      </St.Link>
    </St.Section>
  )
}

export default LoginForm
