import { Background } from '@/components/common'
import { IMAGE_ADDRESS } from '@/constants'
import VisitForm from './form'
import Header from './header'
import Image from 'next/image'
import styled from '@emotion/styled'

const VistFinding = () => {
  return (
    <Background type="visit/form">
      <Container>
        <div>
          <Header />
          <VisitForm />
        </div>

        <Image
          src={IMAGE_ADDRESS.landFriend}
          width={280}
          height={381}
          alt="friend"
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
