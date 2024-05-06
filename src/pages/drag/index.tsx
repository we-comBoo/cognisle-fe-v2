import styled from '@emotion/styled'
import React, { useState } from 'react'
import Image from 'next/image'
import { mouseEventHander } from '@/lib/mouseEvent'
import { DragPositionProps } from '@/types/drag'
import { DragEventHandler } from '@/lib/registDragHandler'

export default function Drag() {
  const [{ x, y }, setPosition] = useState<DragPositionProps>({
    x: 0,
    y: 0,
  })

  return (
    <>
      <span>
        Drag : (x:{x} y:{y})
      </span>
      <DragComponent
        x={x}
        y={y}
        onMouseDown={(e) => mouseEventHander(e, setPosition, x, y)}
      >
        <Image
          src="https://i.ibb.co/jhCmmyx/F8-VNCi-Ja-QAAge-Mg.jpg"
          alt="sdads"
          draggable={'false'}
          width={300}
          height={300}
        />
      </DragComponent>
    </>
  )
}

const DragComponent = styled.div<{ x: number; y: number }>`
  transform: ${({ x, y }) => `translateX(${x}px) translateY(${y}px)`};
`
