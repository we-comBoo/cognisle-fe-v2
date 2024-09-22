import { StateModal } from '@/components/common/Modal'
import { useModalActions, useModalStore } from '@/store/modal'
import { FriendProps } from '@/types/friends'
import { Container, PrimaryBtn } from '../common/style'
import useMakeFriends from './useMakeFriends'

const FriendItem = ({ name, email }: FriendProps) => {
  const { handleMakeBtn, modal } = useMakeFriends()
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()
  return (
    <Container>
      <span>{name}</span>
      <PrimaryBtn onClick={() => handleMakeBtn(email)}>친구 신청</PrimaryBtn>
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
    </Container>
  )
}

export default FriendItem
