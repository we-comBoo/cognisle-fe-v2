import { useState } from 'react'
import { StateModalContentProps } from '@/types/modal'
import { useModalActions } from '@/store/modal'
import { useIsEdit, useIsEditActions } from '@/store/island/isEdit'

import { useItemsStore } from '@/store/island/items'
import { useLandStore } from '@/store/island/land'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import { User } from '@/types/user'

const useIslandContol = (ownerEmail: User['email']) => {
  const isEdit = useIsEdit()
  const { setIsEdit } = useIsEditActions()
  const [modalContent, setModalContent] = useState<StateModalContentProps>({
    type: 'warning',
    content: '',
  })
  const { openModal } = useModalActions()
  const items = useItemsStore()
  const land = useLandStore()
  const { queryKey, mutationFn, onSuccess } = queryOptions.island(ownerEmail)
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => onSuccess({ queryClient, queryKey }),
  })

  const handleSaveBtn = async () => {
    console.log('handle Save Click', { items, land })

    try {
      mutation.mutate({ items, land })
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
