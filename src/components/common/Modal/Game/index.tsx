import { GAME_START_POINT_BTN } from '@/constants/styles'
import { STATE_MODAL_TYPE_OVERLAY } from '@/constants/modal'

import { useRouter } from 'next/router'

import { useRef } from 'react'
import PointBtn from '@/components/common/Button'
import PortalModal from '@/components/common/Modal/PortalModal'
import Image from 'next/image'
import {
  GameStatus,
  GameStatusKey,
  PlayStateProps,
  StateModalProps,
} from '@/types/game'
import { IMAGE_ADDRESS } from '@/constants/styles'
import { getDuration } from '@/lib/game'
import { useKeyEscape, useTimer, useOutsideClick } from '@/hooks'
import St from './style'

const Start = () => {
  return (
    <PointBtn item={GAME_START_POINT_BTN}>
      <St.Text>게임 시작</St.Text>
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

const Result = ({ content }: { content: PlayStateProps }) => {
  const duration = getDuration(content.time)
  // console.log('게임 경과 시간: ', duration, '획득한 아이템', content.obtained)
  return <div> 게임 결과 보이기 모달 {duration?.second} </div>
}

const Matched = ({ content }: { content: PlayStateProps }) => {
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
      <St.Root color={STATE_MODAL_TYPE_OVERLAY[router.pathname]}>
        {/*<button onClick={handleClose} className="close-btn">
          Close
        </button>*/}
        <St.Content ref={contentRef}>
          {type == GameStatus.MATCHED && content && (
            <Matched content={content} />
          )}
          {type == GameStatus.START && <Start />}
          {type == GameStatus.CLEAR && <Clear />}
          {type == GameStatus.RESULT && content && <Result content={content} />}
        </St.Content>
      </St.Root>
    </PortalModal>
  )
}

export default StateModal
