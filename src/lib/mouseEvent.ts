import { ItemsStateActions, ItemProps } from '@/types/island/item'

export const mouseEventHandler = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  updateItem: ItemsStateActions['updateItem'],
  x: ItemProps['x'],
  y: ItemProps['y'],
  z: ItemProps['z'],
  id: ItemProps['id'],
  src: ItemProps['src'],
) => {
  const initX = e.screenX
  const initY = e.screenY

  const mouseMoveHandler = (e: MouseEvent) => {
    if (e.cancelable) e.preventDefault()
    {
      /*console.log('mouseMove', id, {
      x: x + e.screenX - initX,
      y: y + e.screenY - initY,
      z: z,
      id: id,
      src: src,
    })*/
    }
    updateItem({
      x: x + e.screenX - initX,
      y: y + e.screenY - initY,
      z: z,
      id: id,
      src: src,
    })
  }
  const mouseDownHandler = (e: MouseEvent) => {
    // console.log('mouseDown')
    // 현재 가장 높은 z-index 값 가져와서 그거 보다 +1 처리해서 사용자가 움직일 때 모든 다른 아이템보다 위에 있게 하기
    // z-index 정규화 처리 필요
  }
  const mouseUpHandler = (e: MouseEvent) => {
    // console.log('mouseUp')
    document.removeEventListener('mousemove', mouseMoveHandler)
    // z-index 정규화 처리 필요
  }

  document.addEventListener('mousemove', mouseMoveHandler)
  // 한번만 실행되면 되기에 { once: true } 옵션을 추가
  document.addEventListener('mouseup', mouseUpHandler, { once: true })
  document.addEventListener('mousedown', mouseDownHandler, {
    once: true,
  })
}

export function isMouseEvent(
  e: any,
): e is React.MouseEvent<HTMLDivElement, MouseEvent> {
  return e !== undefined
}
