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
    const parsedItems = Object.entries(items).map(
      ([
        key,
        {
          locations: { x, y, z, show },
        },
      ]) => ({
        no: Number(key),
        x,
        y,
        z,
        show,
      }),
    )
    //console.log('handle Save Click', parsedItems, land.state)

    try {
      mutation.mutate({ items: parsedItems, land_back_id: land.state })
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
