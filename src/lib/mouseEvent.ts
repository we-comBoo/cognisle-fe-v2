import { DragPositionProps } from '@/types/drag'

export const mouseEventHandler = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setPosition: React.Dispatch<React.SetStateAction<DragPositionProps>>,
  x: DragPositionProps['x'],
  y: DragPositionProps['y'],
) => {
  const initX = e.screenX
  const initY = e.screenY

  const mouseMoveHandler = (e: MouseEvent) => {
    console.log('mouseMovie')
    setPosition({
      x: x + e.screenX - initX,
      y: y + e.screenY - initY,
    })
  }
  const mouseDownHandler = (e: MouseEvent) => {
    console.log('mouseDown')
    // document.removeEventListener('mousemove', mouseMoveHandler)
  }
  const mouseUpHandler = (e: MouseEvent) => {
    console.log('mouseUp')
    document.removeEventListener('mousemove', mouseMoveHandler)
  }

  document.addEventListener('mousemove', mouseMoveHandler)
  // 한번만 실행되면 되기에 { once: true } 옵션을 추가
  document.addEventListener('mouseup', mouseUpHandler, { once: true })
  document.addEventListener('mousedown', mouseDownHandler, {
    once: true,
  })
}
