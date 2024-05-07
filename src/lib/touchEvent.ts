import { DragPositionProps } from '@/types/drag'

export const touchEventHandler = (
  e: React.TouchEvent<HTMLDivElement>,
  setPosition: React.Dispatch<React.SetStateAction<DragPositionProps>>,
  x: DragPositionProps['x'],
  y: DragPositionProps['y'],
  z: DragPositionProps['z'],
) => {
  const initX = e.touches[0].pageX
  const initY = e.touches[0].pageY

  const touchMoveHandler = (e: TouchEvent) => {
    console.log('mouseMove')
    // touch를 통해 스크롤 내리면서 drag가 발생하는 버그 방지용
    if (e.cancelable) e.preventDefault()
    setPosition({
      x: x + e.touches[0].pageX - initX,
      y: y + e.touches[0].pageY - initY,
      z: z,
    })
  }
  const touchStartHandler = (e: TouchEvent) => {
    console.log('mouseDown')
    // document.removeEventListener('mousemove', mouseMoveHandler)
  }
  const touchEndHandler = (e: TouchEvent) => {
    console.log('mouseUp')
    document.removeEventListener('touchmove', touchMoveHandler)
  }

  document.addEventListener('touchmove', touchMoveHandler)
  // 한번만 실행되면 되기에 { once: true } 옵션을 추가
  document.addEventListener('touchstart', touchStartHandler, { once: true })
  document.addEventListener('touchend', touchEndHandler, {
    once: true,
  })
}
