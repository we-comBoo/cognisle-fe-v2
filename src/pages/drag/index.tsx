import styled from '@emotion/styled'
import React, { useState } from 'react'
import Image from 'next/image'
interface DragPosition {
  x: number
  y: number
}

const mouseEventHander = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setPosition: React.Dispatch<React.SetStateAction<DragPosition>>,
  x: DragPosition['x'],
  y: DragPosition['y'],
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

export default function Drag() {
  const [{ x, y }, setPosition] = useState<DragPosition>({
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
