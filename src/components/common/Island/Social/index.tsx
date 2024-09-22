import { useSession } from 'next-auth/react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import { useModalActions, useModalStore } from '@/store/modal'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { useState } from 'react'
import { StateModalContentProps } from '@/types/modal'
import StateModal from '@/components/common/Modal/State'

const Social = () => {
  const [modal, setModal] = useState<StateModalContentProps>({
    type: 'accept',
    content: '',
  })

  const { data: session } = useSession()
  const ownerEmail = session?.user.email
  const {
    query: { email: friendEmail },
  } = useRouter()
  const email = friendEmail ? friendEmail : ownerEmail

  const { queryKey, queryFn, enabled, mutationLikes, onSuccess } =
    queryOptions.island(email)
  const queryClient = useQueryClient()
  const { data: island } = useQuery({
    queryKey,
    queryFn,
    enabled,
    refetchOnMount: 'always', // staleTime과 gcTime 무관 마운트 되는 순간 항상 refetch
  })
  const { openModal, closeModal } = useModalActions()
  const isOpen = useModalStore()
  const likeMutation = useMutation({
    mutationFn: () => mutationLikes(email),
    onSuccess: () => {
      onSuccess({ queryClient, queryKey: email })
      setModal({
        type: 'accept',
        content: '좋아여',
      })
      openModal()
    },
    onError: (error) => {
      setModal({
        type: 'warning',
        content: '좋아요 취소',
      })
      openModal()
    },
  })
  return (
    <StyledRoot>
      {modal.content && (
        <>
          <StateModal
            content={modal.content}
            type={modal.type}
            isOpen={isOpen}
            handleClose={closeModal}
          />
        </>
      )}
      <LikesBtn onClick={() => likeMutation.mutate()}>좋아요 버튼</LikesBtn>
      {island && island.land.like_cnt} 개
    </StyledRoot>
  )
}

export default Social

const LikesBtn = styled.button`
  background: white;
`

const StyledRoot = styled.div`
  background: white;
`
