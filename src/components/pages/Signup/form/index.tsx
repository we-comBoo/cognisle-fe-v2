import { FormBtn, StateModal } from '@/components/common'
import { useModalActions, useModalStore } from '@/store/modal'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import useSignupForm from './hook'

const SignupForm = () => {
  const router = useRouter()
  const goLoginPage = () => {
    router.push('/login')
  }
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()
  const { inputRefs, errorMsg, submitSignupForm } = useSignupForm()

  return (
    <Section onSubmit={submitSignupForm}>
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
      <Form>
        <InputWrapper>
          <span>이메일</span>
          <Input
            id="email"
            type="text"
            placeholder="이메일"
            name="email"
            autoComplete="email"
            ref={(el) => {
              if (el !== null) inputRefs.current[0] = el
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <span>비밀번호</span>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호"
            name="password"
            ref={(el) => {
              if (el !== null) inputRefs.current[1] = el
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <span>이름</span>
          <Input
            id="name"
            type="text"
            placeholder="이름"
            name="name"
            ref={(el) => {
              if (el !== null) inputRefs.current[2] = el
            }}
          />
        </InputWrapper>
        <SignupBtn>회원가입</SignupBtn>
      </Form>
      <Link onClick={goLoginPage}> 로그인</Link>
    </Section>
  )
}

export default SignupForm

const Section = styled.section`
  color: var(--color-green-400);
`

const Form = styled.form`
  margin-bottom: 4.8rem;
`

const SignupBtn = FormBtn

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 28rem;
  margin-bottom: 3rem;

  ${FONTS.body5}
`
const Input = styled.input`
  ${FONTS.body4};
  background-color: transparent;
  border-bottom: 0.1rem solid var(--color-green-400);
  height: 4rem;
  width: 20rem;
  &::placeholder {
    color: var(--color-green-400);
  }
`

const Link = styled.div`
  text-align: center;
  text-decoration: underline;
  ${FONTS.body4};
`
