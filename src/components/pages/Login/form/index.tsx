import useLoginForm from '@/components/pages/Login/form/useLoginForm'

import { St } from './style'
import { useRouter } from 'next/router'

import { StateModal } from '@/components/common'
import { useModalActions, useModalStore } from '@/store/modal'
import { LOGIN_INITIAL_VALUES, LOGIN_VALIDATION } from '@/constants'
import { LOGIN_FORM, IMAGE_ADDRESS } from '@/constants'

const LoginForm = () => {
  const router = useRouter()
  const goSignupPage = () => {
    router.push('/signup')
  }
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()

  const {
    values,
    emailFlagCheck,
    handleEmailFlagCheck,
    errorMsg,
    handleInputChange,
    submitLoginForm,
  } = useLoginForm({
    initialValues: LOGIN_INITIAL_VALUES,
    validate: LOGIN_VALIDATION,
  })

  return (
    <St.Section onSubmit={submitLoginForm}>
      {errorMsg && (
        <>
          <StateModal
            content={errorMsg}
            type="warning"
            isOpen={isOpen}
            handleClose={closeModal}
          />
        </>
      )}
      <St.Form>
        {LOGIN_FORM.map(({ label, id, type, placeholder, name }, idx) => (
          <div key={idx}>
            <St.Input
              id={id}
              type={type}
              placeholder={placeholder}
              name={name}
              value={values[name]}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            {idx == LOGIN_FORM.length - 1 && (
              <St.CheckBoxWrapper>
                <St.CheckBox
                  type="checkbox"
                  id="rememberEmail"
                  checked={emailFlagCheck}
                  onChange={() => handleEmailFlagCheck()}
                  imgSrc={IMAGE_ADDRESS.EMAIL_CHECK_BOX}
                />
                <label htmlFor="rememberId">아이디 기억하기</label>
              </St.CheckBoxWrapper>
            )}
          </div>
        ))}

        <St.LoginBtn type="submit">로그인</St.LoginBtn>
      </St.Form>

      <St.Link onClick={goSignupPage}> 회원가입</St.Link>
    </St.Section>
  )
}

export default LoginForm
