import { GAME_START_POINT_BTN } from '@/constants'
import { STATE_MODAL_TYPE_OVERLAY } from '@/constants/modal/state'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { useRef } from 'react'
import { PointBtn } from '../../Button'
import PortalModal from '../PortalModal'
import Image from 'next/image'
import {
  GameStatus,
  GameStatusKey,
  playStateProps,
  StateModalProps,
} from '@/types'
import { IMAGE_ADDRESS } from '@/constants'
import { getDuration } from '@/lib'
import { useKeyEscape, useTimer, useOutsideClick } from '@/hooks'

const Start = () => {
  return (
    <PointBtn item={GAME_START_POINT_BTN}>
      <Text>게임 시작</Text>
    </PointBtn>
  )
}

const Clear = () => {
  return (
    <Image
      src={IMAGE_ADDRESS.GAME_CLEAR}
      width={254}
      height={254}
      alt="gameClear"
    />
  )
}

const Result = ({ content }: { content: playStateProps }) => {
  const duration = getDuration(content.time)
  console.log('게임 경과 시간: ', duration, '획득한 아이템', content.obtained)
  return <div> 게임 결과 보이기 모달 {duration?.second} </div>
}

const Matched = ({ content }: { content: playStateProps }) => {
  return <div>현재 획득한 아이템 정보 {content.currentMatched?.symbol}</div>
}

const closeTime = (type: GameStatusKey) => {
  if (type === GameStatus.RESULT) {
    return 5000
  } else if (type === GameStatus.CLEAR) {
    return 4000
  } else {
    return 3000
  }
}

const StateModal = ({
  type,
  isOpen,
  content,
  handleClose,
}: StateModalProps) => {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement>(null) //내부 버튼 영역

  useOutsideClick(contentRef, handleClose)
  useKeyEscape('escape', handleClose)
  useTimer(closeTime(type), handleClose)

  if (!isOpen || !router.isReady) return null
  return (
    <PortalModal>
      <ModalWrapper color={STATE_MODAL_TYPE_OVERLAY[router.pathname]}>
        {/*<button onClick={handleClose} className="close-btn">
          Close
        </button>*/}
        <Content ref={contentRef}>
          {type == GameStatus.MATCHED && content && (
            <Matched content={content} />
          )}
          {type == GameStatus.START && <Start />}
          {type == GameStatus.CLEAR && <Clear />}
          {type == GameStatus.RESULT && content && <Result content={content} />}
        </Content>
      </ModalWrapper>
    </PortalModal>
  )
}

export default StateModal

const ModalWrapper = styled.div<{ color: string }>`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: ${({ color }) => `${color}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Text = styled.div`
  ${FONTS.h1}
  color:var(--color-orange-300);
`
