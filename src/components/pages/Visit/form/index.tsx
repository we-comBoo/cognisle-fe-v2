import { Background, StateModal } from '@/components/common'
import {
  VISIT_VALIDATION,
  VISIT_INITIAL_VALUE,
  IMAGE_ADDRESS,
} from '@/constants'
import { useModalStore, useModalActions } from '@/store/modal'
import useVisitForm from './useVisitForm'
import Image from 'next/image'
import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'

const VisitForm = () => {
  const { value, errorMsg, handleInputChange, submitVisitForm } = useVisitForm({
    initialValue: VISIT_INITIAL_VALUE,
    validate: VISIT_VALIDATION,
  })
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()
  return (
    <Background type="visit/form">
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
      <Form onSubmit={submitVisitForm}>
        <Input
          name="friendId"
          placeholder="친구 코드"
          type="text"
          id="friendId"
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button>
          <Image src={IMAGE_ADDRESS.landForm} width={21} height={21} />
        </button>
      </Form>
    </Background>
  )
}

export default VisitForm

const Form = styled.form`
  background-color: var(--color-yellow-100);
  width: 28rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1.6rem;
  ${FONTS.body6}
`

const Input = styled.input`
  background-color: transparent;
  height: 4rem;
  color: var(--color-green-400);
  &::placeholder {
    color: var(--color-green-400);
  }
`
