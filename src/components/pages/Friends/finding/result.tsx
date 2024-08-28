import { FriendProps } from '@/types/friends'
import styled from '@emotion/styled'
import { Container, PrimaryBtn } from '../common/style'

const FriendItem = ({ name, email }: FriendProps) => {
  const handleRequestBtn = () => {
    console.log('handleRequestBtn', email)
  }
  return (
    <Container>
      <span>{name}</span>
      <PrimaryBtn onClick={handleRequestBtn}>친구 신청</PrimaryBtn>
    </Container>
  )
}

export default FriendItem
