import { Container, Divider, PrimaryBtn, SecondaryBtn } from '../common/style'
import styled from '@emotion/styled'
import { useSession } from 'next-auth/react'
import { queryOptions } from '@lib/ReactQuery/queryOptions'
import { useQuery } from '@tanstack/react-query'
import { FriendProps } from '@/types/friends'
const RequestItem = ({ name, email }: FriendProps) => {
  const handleAcceptBtn = () => {
    console.log('handleAcceptBtn', email)
  }
  const handleDismissBtn = () => {
    console.log('handleDismissBtn', email)
  }
  return (
    <Container>
      <div>{name}</div>
      <BtnContainer>
        <PrimaryBtn onClick={handleAcceptBtn}>수락</PrimaryBtn>
        <SecondaryBtn onClick={handleDismissBtn}>거절</SecondaryBtn>
      </BtnContainer>
    </Container>
  )
}

const Requests = () => {
  const { data: session } = useSession()
  const ownerEmail = session?.user.email
  const { queryKey, queryFn, enabled } =
    queryOptions.myFriendsRequest(ownerEmail)
  const { data: Friends } = useQuery({ queryKey, queryFn, enabled })
  console.log(Friends)
  return (
    <>
      {Friends &&
        Friends.map(({ name, email }, idx) => (
          <>
            <RequestItem name={name} email={email} key={email} />
            {idx != Friends.length - 1 && <Divider />}
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
