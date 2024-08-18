import useIslandContol from './useIslandControl'
import { StateModal } from '@/components/common/Modal'
import { useModalActions, useModalStore } from '@/store/modal'
import Name from './Button/Name'
import EditMode from './Button/EditMode'
import { Layout as St } from './style'

interface IslandControlProps {
  name: string
  isOwner: boolean
}

const IslandControl = ({ name, isOwner }: IslandControlProps) => {
  const { modalContent, handleSaveBtn, handleModeBtn } = useIslandContol()
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()
  console.log(name, isOwner)

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
      <Name name={name} />
      {isOwner && (
        <EditMode handleSaveBtn={handleSaveBtn} handleModeBtn={handleModeBtn} />
      )}
    </St.styledRoot>
  )
}

export default IslandControl
