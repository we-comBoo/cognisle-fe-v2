import { GAME_START_POINT_BTN, IMAGE_ADDRESS } from '@/constants'
import { STATE_MODAL_TYPE_OVERLAY } from '@/constants/modal/state'
import useOutsideClick from '@/hooks/useOutsideClick'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { useRef, useEffect } from 'react'
import { PointBtn } from '../../Button'
import PortalModal from '../PortalModal'
import Image from 'next/image'
import { GameStateKeyProps } from '@/types'

interface StateModalProp {
  isOpen: boolean
  handleClose: () => void
  type: GameStateKeyProps
}

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
      src={IMAGE_ADDRESS['gameClear']}
      width={254}
      height={254}
      alt="gameClear"
    />
  )
}

const Result = () => {
  return <div> 게임 결과 보이기 모달 </div>
}

const StateModal = ({ type, isOpen, handleClose }: StateModalProp) => {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement>(null) //내부 버튼 영역

  useOutsideClick(isOpen ? contentRef : null, handleClose)

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose()
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  if (!isOpen || !router.isReady) return null
  return (
    <PortalModal>
      <ModalWrapper color={STATE_MODAL_TYPE_OVERLAY[router.pathname]}>
        {/*<button onClick={handleClose} className="close-btn">
          Close
        </button>*/}
        <Content ref={contentRef}>
          {type == 'start' && <Start />}
          {type == 'clear' && <Clear />}
          {type == 'result' && <Result />}
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
