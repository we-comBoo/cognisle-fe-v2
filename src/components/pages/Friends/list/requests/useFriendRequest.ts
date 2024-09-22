import { User } from '@/types/user'
import { StateModalContentProps } from '@/types/modal'
import { useState } from 'react'
import { useModalActions } from '@/store/modal'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'

const useFriendRequest = ({ email }: { email: User['email'] }) => {
  const [modal, setModal] = useState<StateModalContentProps>({
    type: 'accept',
    content: '',
  })
  const { openModal } = useModalActions()
  const { data: session } = useSession()
  const ownerEmail = session?.user.email
  const { queryKey, queryFn, enabled, acceptRequest, rejectRequest } =
    queryOptions.myFriendsRequest(ownerEmail)
  const { data: Friends } = useQuery({ queryKey, queryFn, enabled })

  const queryClient = useQueryClient()
  const acceptMutation = useMutation({
    mutationFn: () => acceptRequest(email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      setModal({
        type: 'accept',
        content: '친구가 추가되었습니다.',
      })
      openModal()
    },
    onError: (error) => {
      setModal({
        type: 'warning',
        content: '친구 추가 오류 발생',
      })
      openModal()
    },
  })

  const rejectMutation = useMutation({
    mutationFn: () => rejectRequest(email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      setModal({
        type: 'reject',
        content: '친구 신청을 거절했습니다.',
      })
      openModal()
    },
    onError: (error) => {
      // 에러 처리 (선택 사항)
      setModal({
        type: 'warning',
        content: '친구 추가 오류 발생',
      })
      openModal()
    },
  })

  const handleAcceptBtn = () => {
    // console.log('handleAcceptBtn', email)
    acceptMutation.mutate()
  }
  const handleRejectBtn = () => {
    // console.log('handleDismissBtn', email)
    // rejectMutation.mutate()
    setModal({
      type: 'reject',
      content: '친구 신청을 거절했습니다.',
    })
    openModal()
  }

  return { handleAcceptBtn, handleRejectBtn, modal, Friends }
}

export default useFriendRequest
