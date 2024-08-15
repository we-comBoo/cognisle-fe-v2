import { useState } from 'react'
import { StateModalContentProps } from '@/types/modal'
import { useModalActions } from '@/store/modal'
import { useIsEdit, useIsEditActions } from '@/store/island/isEdit'
import axios from 'axios'
import { useItemsStore } from '@/store/island/items'
import { useLandStore } from '@/store/island/land'

const useIslandContol = () => {
  const isEdit = useIsEdit()
  const { setIsEdit } = useIsEditActions()
  const [modalContent, setModalContent] = useState<StateModalContentProps>({
    type: 'warning',
    content: '',
  })
  const { openModal } = useModalActions()
  const items = useItemsStore()
  const land = useLandStore()
  const handleSaveBtn = async () => {
    console.log('handle Save Click')
    try {
      const response = await axios.put('/api/lands/item', { items, land })
      console.log(response)
    } catch (error) {}
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
