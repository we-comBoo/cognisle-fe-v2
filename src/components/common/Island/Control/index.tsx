import Image from 'next/image'
import useIslandContol from './useIslandControl'
import PointBtn from '@/components/common/Button'
import { StateModal } from '@/components/common/Modal'
import { Name_POINT_BTN } from '@/constants/styles/pointBtn'
import { useModalActions, useModalStore } from '@/store/modal'
import { useIsEdit } from '@/store/island/isEdit'
import St from './style'
const IslandControl = ({ name }: { name: string }) => {
  const { modalContent, handleSaveBtn, handleModeBtn } = useIslandContol()
  const isEdit = useIsEdit()
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()
  console.log('편집 모드', isEdit)

  return (
    <St.Root>
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
      <PointBtn item={Name_POINT_BTN}>
        <St.Text>{name}</St.Text>
      </PointBtn>
      <St.Btn.Wrapper>
        {isEdit && <St.Btn.Save onClick={handleSaveBtn}>저장</St.Btn.Save>}
        <St.Btn.Mode onClick={handleModeBtn}>
          <Image
            src={`/assets/${isEdit ? 'green' : 'yellow'}/edit.svg`}
            alt="dfsd"
            height={48}
            width={48}
          />
        </St.Btn.Mode>
      </St.Btn.Wrapper>
    </St.Root>
  )
}

export default IslandControl
