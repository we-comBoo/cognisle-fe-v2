import { mouseEventHandler } from '@/lib/mouseEvent'
import { touchEventHandler } from '@/lib/touchEvent'
import { DragPositionProps } from '@/types/drag'

export const isTouchScreen =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches

export const dragEventHandler = (
  setPosition: React.Dispatch<React.SetStateAction<DragPositionProps>>,
  x: DragPositionProps['x'],
  y: DragPositionProps['y'],
  z: DragPositionProps['z'],
) => {
  if (isTouchScreen) {
    return {
      onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) =>
        touchEventHandler(touchEvent, setPosition, x, y, z),
    }
  } else {
    return {
      onMouseDown: (mouseEvent: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        mouseEventHandler(mouseEvent, setPosition, x, y, z),
    }
  }
}
