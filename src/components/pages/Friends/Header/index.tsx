import styled from '@emotion/styled'

import Menu from './menu'
import Title from './title'

const Header = () => {
  return (
    <Container>
      <Title />
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
  margin: 3rem 0;
`
