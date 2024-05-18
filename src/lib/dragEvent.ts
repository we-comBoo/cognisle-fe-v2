import { mouseEventHandler } from '@/lib/mouseEvent'
import { touchEventHandler } from '@/lib/touchEvent'

import {
  ItemProps,
  ItemsStateActions,
  ItemsStoreProps,
} from '@/types/island/item'

export const isTouchScreen =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches

export const dragEventHandler = (
  updateItem: ItemsStateActions['updateItem'],
  x: ItemProps['x'],
  y: ItemProps['y'],
  z: ItemProps['z'],
  id: ItemProps['id'],
  src: ItemProps['src'],
) => {
  if (isTouchScreen) {
    return {
      onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) =>
        touchEventHandler(touchEvent, updateItem, x, y, z, id, src),
    }
  } else {
    return {
      onMouseDown: (mouseEvent: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        mouseEventHandler(mouseEvent, updateItem, x, y, z, id, src),
    }
  }
}
