import { useState } from 'react'
import { StateModalContentProps } from '@/types/modal'
import { useModalActions } from '@/store/modal'
const useIslandContol = () => {
  const [showSaveBtn, setShowSave] = useState(false)
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
  }
  const handleModeBtn = () => {
    setShowSave(!showSaveBtn)
  }
  return { showSaveBtn, modalContent, handleSaveBtn, handleModeBtn }
}

export default useIslandContol
