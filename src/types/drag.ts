export interface DragPositionProps {
  x: number
  y: number
  z: number
}

export interface DragEventHandlerProps {
  e:
    | React.TouchEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement, MouseEvent>
  setPosition: React.Dispatch<React.SetStateAction<DragPositionProps>>
  x: DragPositionProps['x']
  y: DragPositionProps['y']
  z: DragPositionProps['z']
}
