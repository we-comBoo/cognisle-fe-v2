import LogoutBtn from '@/components/button/LogoutBtn'
import { Background } from '@/components/common/Layout'
import Logo from '@/components/common/Logo'
import MenuBtn from '@/components/pages/Home/MenuBtn'
import UserPointBtn from '@/components/pages/Home/UserPointBtn'

import styled from '@emotion/styled'

const Home = () => {
  return (
    <Background type="home">
      <Container>
        <Logo type="primary" />
        <UserPointBtn />
        <MenuBtn />
        <LogoutBtn />
      </Container>
    </Background>
  )
}

export default Home

const Container = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.6rem;
`
