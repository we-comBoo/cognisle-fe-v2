import Name from './Name'
import { useOwner } from '@/store/island/owner'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FONTS } from '@/styles/font'
const Header = () => {
  const { email, name } = useOwner()
  const router = useRouter()

  const handleCloseBtn = () => {
    console.log('close')
    router.push(
      {
        pathname: '/island',
        query: { email },
      },
      '/island',
    )
  }
  return (
    <Container>
      <Name name={name} />
      <CloseBtn onClick={handleCloseBtn}>
        <Image
          src="/assets/green/close.svg"
          alt="close btn"
          width={48}
          height={48}
        />
      </CloseBtn>
    </Container>
  )
}

export default Header

const Container = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  color: var(--color-green-400);
  ${FONTS.body5};
`

const CloseBtn = styled.button`
  cursor: pointer;
`
