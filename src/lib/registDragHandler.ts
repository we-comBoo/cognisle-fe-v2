import { touchEventHandler } from '@/lib/touchEvent'
import { mouseEventHandler } from '@/lib/mouseEvent'
import { DragEventHandlerProps } from '@/types/drag'
import React from 'react'
const isTouchScreen =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches

export const DragEventHandler = ({
  e,
  setPosition,
  x,
  y,
}: DragEventHandlerProps) => {
  if (isTouchScreen) {
    return touchEventHandler(
      e as React.TouchEvent<HTMLDivElement>,
      setPosition,
      x,
      y,
    )
  } else {
    return mouseEventHandler(
      e as React.MouseEvent<HTMLDivElement>,
      setPosition,
      x,
      y,
    )
  }
}
