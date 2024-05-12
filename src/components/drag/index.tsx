import styled from '@emotion/styled'
import { useState } from 'react'
import Image from 'next/image'
import { mouseEventHandler } from '@/lib/mouseEvent'
import { touchEventHandler } from '@/lib/touchEvent'
import { DragPositionProps } from '@/types/drag'
import { dragEventHandler, isTouchScreen } from '@/lib/dragEvent'
interface DragProps {
  originalX: DragPositionProps['x']
  originalY: DragPositionProps['y']
  originalZ: DragPositionProps['z']
  src: string
}
export default function Drag({
  originalX,
  originalY,
  originalZ,
  src,
}: DragProps) {
  const [{ x, y, z }, setPosition] = useState<DragPositionProps>({
    x: originalX,
    y: originalY,
    z: originalZ,
  })

  return (
    <DragComponent
      x={x}
      y={y}
      z={z}
      {...dragEventHandler(setPosition, x, y, z)}
    >
      <Image
        src={src}
        alt="sdads"
        draggable={'false'}
        width={300}
        height={300}
      />
    </DragComponent>
  )
}

const DragComponent = styled.div<{ x: number; y: number; z: number }>`
  transform: ${({ x, y }) => `translateX(${x}px) translateY(${y}px)`};
  z-index: ${({ z }) => `${z}`};
  position: relative;
`
