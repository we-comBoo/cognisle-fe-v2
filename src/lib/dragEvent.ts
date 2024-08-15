import { mouseEventHandler } from '@/lib/mouseEvent'
import { touchEventHandler } from '@/lib/touchEvent'
import { useIsEdit } from '@/store/island/isEdit'

import { ItemProps, ItemsStateActions } from '@/types/island/item'

export const isTouchScreen =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches

export const dragEventHandler = (
  updateItem: any,
  x: ItemProps['locations']['x'],
  y: ItemProps['locations']['y'],
  z: ItemProps['locations']['z'],
  no: ItemProps['no'],
  item_image: ItemProps['item_image'],
) => {
  /*if (isTouchScreen) {
    return {
      onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) =>
        touchEventHandler(touchEvent, updateItem, x, y, z, id, src),
    }
  } else {
    return {
      onMouseDown: (mouseEvent: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        mouseEventHandler(mouseEvent, updateItem, x, y, z, id, src),
    }
  }*/

  return {
    onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) =>
      touchEventHandler(touchEvent, updateItem, x, y, z, no, item_image),
    onMouseDown: (mouseEvent: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
      mouseEventHandler(mouseEvent, updateItem, x, y, z, no, item_image),
  }
}
