import { useItemsActions } from '@/store/island/items'
import { ItemInfoProps } from '@/types/island'
import { useLandActions } from '@/store/island/land'
import { LAND_INFO } from '@/constants/island'
import { StateModalContentProps } from '@/types/modal'
import { useModalActions, useModalStore } from '@/store/modal'
import { useState } from 'react'

const useIslandEdit = () => {
  const [modalContent, setModalContent] = useState<StateModalContentProps>({
    type: 'warning',
    content: '',
  })
  const isOpen = useModalStore()
  const { openModal, closeModal } = useModalActions()
  const { removeItem, addItem } = useItemsActions()
  const handleItemClick = (
    no: ItemInfoProps['no'],
    show: ItemInfoProps['locations']['show'],
  ) => {
    if (no) {
      if (show) {
        removeItem(no) // remove
        setModalContent({
          type: 'warning',
          content: '아이템을 제거했습니다!',
        })
        openModal()
      } else {
        addItem(no)
      }
    }
  }
  const { setLand } = useLandActions()
  const handleLandClick = (id: number) => {
    const selectedLand = {
      state: id,
      land_img: LAND_INFO[id].img.land,
      bg_img: LAND_INFO[id].img.bg,
    }
    setLand(selectedLand)
  }

  return { handleItemClick, handleLandClick, modalContent, isOpen, closeModal }
}

export default useIslandEdit
