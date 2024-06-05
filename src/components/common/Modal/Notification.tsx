import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'
import PortalModal from './PortalModal'
import useOutsideClick from '@/hooks/useOutsideClick'
interface FeedbackModalProp {
  isOpen: boolean

  type: 'warning' | 'success'
  handleClose: () => void
  content: string
}

const Notification = ({
  isOpen,
  type,
  handleClose,
  content,
}: FeedbackModalProp) => {
  const contentRef = useRef<HTMLDivElement>(null) //내부 버튼 영역\
  useOutsideClick(contentRef, handleClose)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose()
    }, 5000)

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timer)
  }, [])
  if (!isOpen) return null
  return (
    <PortalModal>
      <Wrapper>
        {/*<button onClick={handleClose} className="close-btn">
          Close
        </button>*/}
        <Content ref={contentRef}>{content}</Content>
      </Wrapper>
    </PortalModal>
  )
}

export default Notification

const Wrapper = styled.div`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
`
const Content = styled.div`
  width: 70%;
  height: 70%;
  background-color: #282c34;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`
