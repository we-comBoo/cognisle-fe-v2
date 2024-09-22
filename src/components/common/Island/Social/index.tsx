import { useSession } from 'next-auth/react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import { useModalActions, useModalStore } from '@/store/modal'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { useState } from 'react'
import { StateModalContentProps } from '@/types/modal'
import StateModal from '@/components/common/Modal/State'
import Image from 'next/image'
import { FONTS } from '@/styles/font'

const Social = () => {
  const [modal, setModal] = useState<StateModalContentProps>({
    type: 'accept',
    content: '',
  })

  const { data: session } = useSession()
  const ownerEmail = session?.user.email
  const router = useRouter()
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

      {island && (
        <SocialContainer>
          <StatusWrapper>
            <div>{island.land.like_cnt}</div>
            <button
              onClick={() =>
                router.push(
                  {
                    pathname: '/chat',
                    query: { email },
                  },
                  '/chat',
                )
              }
            >
              <Image
                src={`/assets/likes/inactive.svg`}
                width={48}
                height={48}
                alt="채팅 아이콘"
              />
            </button>
          </StatusWrapper>
          <StatusWrapper>
            <div>{island.land.like_cnt}</div>
            <button onClick={() => likeMutation.mutate()}>
              <Image
                src={`/assets/likes/${island.land.user_likes ? 'active' : 'inactive'}.svg`}
                width={48}
                height={48}
                alt="섬 좋아요 여부 아이콘"
              />
            </button>
          </StatusWrapper>
        </SocialContainer>
      )}
    </StyledRoot>
  )
}

export default Social

const StatusWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

const StyledRoot = styled.div`
  position: relative;
  right: 2.5rem;
  bottom: 2.4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  color: var(--color-green-400);
  ${FONTS.body3}
`
const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`
