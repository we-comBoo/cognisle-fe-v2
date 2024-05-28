import styled from '@emotion/styled'
import Link from 'next/link'
import Logo from '../Logo'
import Triangle from '../Triangle'

const Header = () => {
  return (
    <Container>
      <Triangle type="header" />
      <Link href="/">
        <Logo type="secondary" />
      </Link>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 3.2rem;
`
