import { useRouter } from 'next/router'
import { useRef } from 'react'
import PortalModal from '@/components/common/Modal/PortalModal'
import {
  Clear,
  Start,
  Result,
  Matched,
} from '@/components/common/Modal/Game/Status'
import { useKeyEscape, useTimer, useOutsideClick } from '@/hooks'
import { GameStatus, StateModalProps } from '@/types/game'
import { closeTime } from '@/lib/Game'
import { STATE_MODAL_TYPE_OVERLAY } from '@/constants/modal'
import St from './style'

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
