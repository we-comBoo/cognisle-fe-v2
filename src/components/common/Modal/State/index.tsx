import Image from 'next/image'
import { useEffect, useRef } from 'react'
import PortalModal from '../PortalModal'
import useOutsideClick from '@/hooks/useOutsideClick'
import St from './style'
import { useRouter } from 'next/router'
import {
  STATE_MODAL_TYPE_INFO,
  STATE_MODAL_TYPE_OVERLAY,
} from '@/constants/UI/stateModal'
import { ModalStateKeyProps } from '@/types'

interface StateModalProp {
  isOpen: boolean
  type: ModalStateKeyProps
  handleClose: () => void
  content: string
}

const StateModal = ({ isOpen, type, handleClose, content }: StateModalProp) => {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement>(null) //내부 버튼 영역
  const { img, color } = STATE_MODAL_TYPE_INFO[type]
  useOutsideClick(contentRef, handleClose)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose()
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  if (!isOpen || !router.isReady) return null
  return (
    <PortalModal>
      <St.ModalWrapper color={STATE_MODAL_TYPE_OVERLAY[router.pathname]}>
        {/*<button onClick={handleClose} className="close-btn">
          Close
        </button>*/}
        <St.Content ref={contentRef} colorStyle={color}>
          <St.IconWrapper>
            <Image src={img.src} width={28} height={21} alt={img.alt} />
          </St.IconWrapper>
          <St.TextWrapper>{content}</St.TextWrapper>
        </St.Content>
      </St.ModalWrapper>
    </PortalModal>
  )
}

export default StateModal
