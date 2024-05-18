import { DragPositionProps } from '@/types/drag'
import { ItemProps, ItemsStateActions } from '@/types/island/item'

export const touchEventHandler = (
  e: React.TouchEvent<HTMLDivElement>,
  updateItem: ItemsStateActions['updateItem'],
  x: ItemProps['x'],
  y: ItemProps['y'],
  z: ItemProps['z'],
  id: ItemProps['id'],
  src: ItemProps['src'],
) => {
  const initX = e.touches[0].pageX
  const initY = e.touches[0].pageY

  const touchMoveHandler = (e: TouchEvent) => {
    console.log('mouseMove')
    // touch를 통해 스크롤 내리면서 drag가 발생하는 버그 방지용
    if (e.cancelable) e.preventDefault()
    updateItem({
      x: x + e.touches[0].pageX - initX,
      y: y + e.touches[0].pageY - initY,
      z: z,
      id: id,
      src: src,
    })
  }
  const touchStartHandler = (e: TouchEvent) => {
    // console.log('mouseDown')
    // document.removeEventListener('mousemove', mouseMoveHandler)
  }
  const touchEndHandler = (e: TouchEvent) => {
    // console.log('mouseUp')
    document.removeEventListener('touchmove', touchMoveHandler)
  }

  document.addEventListener('touchmove', touchMoveHandler, { passive: false })
  // 한번만 실행되면 되기에 { once: true } 옵션을 추가
  document.addEventListener('touchstart', touchStartHandler, { once: true })
  document.addEventListener('touchend', touchEndHandler, {
    once: true,
  })
}

export function isTouchEvent(e: any): e is React.TouchEvent<HTMLDivElement> {
  return e !== undefined
}
