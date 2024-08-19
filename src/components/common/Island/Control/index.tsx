import useIslandContol from './useIslandControl'
import { StateModal } from '@/components/common/Modal'
import { useModalActions, useModalStore } from '@/store/modal'
import Name from './Button/Name'
import EditMode from './Button/EditMode'
import { Layout as St } from './style'
import { useOwner } from '@/store/island/owner'
import { useSession } from 'next-auth/react'

const IslandControl = () => {
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()
  const owner = useOwner()
  const { data: user } = useSession()
  const { modalContent, handleSaveBtn, handleModeBtn } = useIslandContol(
    owner.email,
  )

  return (
    <St.styledRoot>
      {modalContent.content && (
        <>
          <StateModal
            content={modalContent.content}
            type={modalContent.type}
            isOpen={isOpen}
            handleClose={closeModal}
          />
        </>
      )}
      <Name name={owner.name} />
      {user?.user.email === owner.email && (
        <EditMode handleSaveBtn={handleSaveBtn} handleModeBtn={handleModeBtn} />
      )}
    </St.styledRoot>
  )
}

export default IslandControl
