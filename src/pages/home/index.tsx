import { Background, Logo } from '@/components/common'
import UserPointBtn from '@/components/pages/Home/UserPointBtn'

import styled from '@emotion/styled'

const Home = () => {
  return (
    <Background type="home">
      <Container>
        <Logo type="primary" />
        <UserPointBtn />
        {/*
        <div>
          {FACK.map((item, idx) => (
            <PointBtn key={idx} item={item} />
          ))}
        </div>*/}
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
  gap: 9.6rem;
`
