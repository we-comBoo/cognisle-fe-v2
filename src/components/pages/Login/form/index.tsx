import useLoginForm from '@/components/pages/Login/form/hook'
import { LOCAL_STORAGE, IMAGE_ADDRESS } from '@/constants'

import { St } from './style'
import { useRouter } from 'next/router'

import { useState, useEffect } from 'react'
import { Notification } from '@/components/common'
import { useModalActions, useModalStore } from '@/store/modal'

const LoginForm = () => {
  const router = useRouter()
  const goSignupPage = () => {
    router.push('/signup')
  }
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()

  const { inputRefs, errorMsg, submitLoginForm } = useLoginForm()
  const [emailFlagCheck, setEmailFlagCheck] = useState(false)
  const LS_EMAIL =
    typeof window !== 'undefined' ? localStorage.getItem('LS_EMAIL') ?? '' : ''

  const handleEmailFlagCheck = () => {
    setEmailFlagCheck((prev) => !prev)
  }
  const handleLocalStorageEmail = () => {
    if (emailFlagCheck) {
      console.log('add')
      localStorage.setItem(
        LOCAL_STORAGE['emailCheckBox'],
        inputRefs.current[0].value,
      )
    } else {
      console.log('remove')
      localStorage.removeItem(LOCAL_STORAGE['emailCheckBox'])
    }
  }
  useEffect(() => {
    if (LS_EMAIL) {
      setEmailFlagCheck(true)
      handleLocalStorageEmail()
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
          defaultValue={LS_EMAIL}
        />
        {errorMsg.email && (
          <>
            <Notification
              content={errorMsg.email}
              type="warning"
              isOpen={isOpen}
              handleClose={closeModal}
            />
          </>
        )}

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
        {errorMsg.password && (
          <>
            <Notification
              content={errorMsg.password}
              type="warning"
              isOpen={isOpen}
              handleClose={closeModal}
            />
          </>
        )}
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
        <St.LoginBtn type="submit">로그인</St.LoginBtn>
      </St.Form>

      <St.Link onClick={goSignupPage}> 회원가입</St.Link>
    </St.Section>
  )
}

export default LoginForm
