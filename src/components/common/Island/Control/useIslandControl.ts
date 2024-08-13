import { useState } from 'react'
import { StateModalContentProps } from '@/types/modal'
import { useModalActions } from '@/store/modal'
import { useIsEdit, useIsEditActions } from '@/store/island/isEdit'
const useIslandContol = () => {
  const isEdit = useIsEdit()
  const { setIsEdit } = useIsEditActions()
  const [modalContent, setModalContent] = useState<StateModalContentProps>({
    type: 'warning',
    content: '',
  })
  const { openModal } = useModalActions()
  const handleSaveBtn = () => {
    console.log('handle Save Click')
    setModalContent({
      type: 'success',
      content: '성공적으로 저장했습니다!',
    })
    openModal()
    setIsEdit(isEdit)
  }
  const handleModeBtn = () => {
    setIsEdit(isEdit)
  }
  return { modalContent, handleSaveBtn, handleModeBtn }
}

export default useIslandContol
