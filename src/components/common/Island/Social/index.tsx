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
import HeartIcon from '../../Icon/heart'
import { useLandStore } from '@/store/island/land'
import { LAND_INFO } from '@/constants/island'
import TalkIcon from '../../Icon/talk'

const Social = () => {
  const { state } = useLandStore()
  const {
    color: { primary, secondary, base },
  } = LAND_INFO[state]
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
          <StatusWrapper color={primary.hex}>
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
              <TalkIcon primary={primary.hex} secondary={base.hex} />
            </button>
          </StatusWrapper>
          <StatusWrapper color={primary.hex}>
            <div>{island.land.like_cnt}</div>
            <button onClick={() => likeMutation.mutate()}>
              <HeartIcon
                isActive={island.land.user_likes}
                primary={primary.hex}
                secondary={secondary.hex}
              />
            </button>
          </StatusWrapper>
        </SocialContainer>
      )}
    </StyledRoot>
  )
}

export default Social

const StatusWrapper = styled.button<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${({ color }) => `${color}`};
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
