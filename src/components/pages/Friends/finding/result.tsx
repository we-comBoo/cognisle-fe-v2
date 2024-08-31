import { FriendProps } from '@/types/friends'
import { Container, PrimaryBtn } from '../common/style'
import useMakeFriends from './useMakeFriends'

const FriendItem = ({ name, email }: FriendProps) => {
  const { handleMakeBtn } = useMakeFriends()

  return (
    <Container>
      <span>{name}</span>
      <PrimaryBtn onClick={() => handleMakeBtn(email)}>친구 신청</PrimaryBtn>
    </Container>
  )
}

export default FriendItem
