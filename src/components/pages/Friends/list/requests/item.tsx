import {
  Container,
  PrimaryBtn,
  SecondaryBtn,
} from '@/components/pages/Friends/common/style'
import { useModalActions, useModalStore } from '@/store/modal'
import { FriendProps } from '@/types/friends'
import styled from '@emotion/styled'
import useFriendRequest from './useFriendRequest'
import { StateModal } from '@/components/common/Modal'

const Item = ({ name, email }: FriendProps) => {
  const { handleAcceptBtn, handleRejectBtn, modal } = useFriendRequest({
    email,
  })
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()

  return (
    <Container>
      {modal.content && (
        <>
          <StateModal
            content={modal.content}
            type={modal.type}
            isOpen={isOpen}
            handleClose={closeModal}
          />
        </>
      )}
      <div>{name}</div>
      <BtnContainer>
        <PrimaryBtn onClick={handleAcceptBtn}>수락</PrimaryBtn>
        <SecondaryBtn onClick={handleRejectBtn}>거절</SecondaryBtn>
      </BtnContainer>
    </Container>
  )
}

export default Item

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`
