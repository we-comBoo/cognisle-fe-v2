import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import Menu from './menu'
import Title from './title'

const Header = () => {
  const {
    query: { type },
  } = useRouter()
  return (
    <Container>
      <Title title={type as string} />
      <Menu />
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 31rem;
  align-items: center;
  position: relative;
  top: 3rem;
`
