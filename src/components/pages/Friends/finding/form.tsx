import useFindFriends from './useFindFriends'
import Image from 'next/image'
import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
import { IMAGE_ADDRESS } from '@/constants/styles'

const SearchForm = () => {
  const { value, errorMsg, handleInputChange, submitVisitForm } =
    useFindFriends({ initialValue: '' })
  return (
    <>
      <Form onSubmit={submitVisitForm}>
        <Input
          name="friendId"
          placeholder="친구 이메일"
          type="text"
          id="friendId"
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button>
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
