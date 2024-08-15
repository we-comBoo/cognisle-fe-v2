import { Background } from '@/components/common/Layout'
import VisitForm from './form'
import Header from './header'
import styled from '@emotion/styled'
import Icon from '@/components/icon'

const VistFinding = () => {
  return (
    <Background type="visit/form">
      <Container>
        <div>
          <Header />
          <VisitForm />
        </div>

        <Icon
          path="/assets/land"
          file="land"
          icon="friend"
          width={280}
          height={381}
        />
      </Container>
    </Background>
  )
}

export default VistFinding

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: inherit;
  gap: 9rem;
  justify-content: end;
`
