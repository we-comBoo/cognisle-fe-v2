import Image from 'next/image'
import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
import { IMAGE_ADDRESS } from '@/constants/styles'

import { FormEvent, Dispatch, SetStateAction } from 'react'

const SearchForm = ({
  submitSearchForm,
  setEmail,
}: {
  submitSearchForm: (e: FormEvent<HTMLFormElement>) => Promise<void>
  setEmail: Dispatch<SetStateAction<string>>
}) => {
  return (
    <>
      <Form onSubmit={submitSearchForm}>
        <Input
          name="friendEmail"
          placeholder="친구 이메일"
          type="text"
          id="friendEmail"
        />
        <button type="submit">
          <Image
            src={IMAGE_ADDRESS.LAND_FORM}
            width={21}
            height={21}
            alt="돋보기 아이콘"
          />
        </button>
      </Form>
    </>
  )
}

export default SearchForm

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
  ${FONTS.body5}
  color: var(--color-green-400);
  &::placeholder {
    color: var(--color-green-400);
  }
`
