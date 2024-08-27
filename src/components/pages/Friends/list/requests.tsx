import { Container, Divider, PrimaryBtn, SecondaryBtn } from '../common/style'
import styled from '@emotion/styled'

const RequestItem = () => {
  return (
    <Container>
      <div>list</div>
      <BtnContainer>
        <PrimaryBtn>수락</PrimaryBtn>
        <SecondaryBtn>거절</SecondaryBtn>
      </BtnContainer>
    </Container>
  )
}

const Requests = () => {
  const numbers = Array.from({ length: 100 }, (_, index) => index + 1)
  return (
    <>
      {numbers.map((item, idx) => (
        <>
          <RequestItem />
          {idx != numbers.length - 1 && <Divider />}
        </>
      ))}
    </>
  )
}

export default Requests

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`
