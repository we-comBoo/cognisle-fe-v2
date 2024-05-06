import React, { useState } from 'react'

export default function DragExample() {
  const [{ x, y }, setPosition] = useState({
    x: 0,
    y: 0,
  })

  return (
    <div className="p-4">
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Drag</h1>
        <span>without boundary bounce</span>
        <span className="ml-4">
          x:{x} y:{y}
        </span>
      </div>

      <div className="grid items-center justify-center">
        <div
          className="h-24 w-24"
          // style={{ left: x, top: y }}
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          onMouseDown={(e) => {
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
            document.addEventListener('mouseup', mouseUpHandler, { once: true })
            document.addEventListener('mousedown', mouseDownHandler, {
              once: true,
            })
          }}
        >
          <img
            src="https://i.ibb.co/jhCmmyx/F8-VNCi-Ja-QAAge-Mg.jpg"
            alt="sdads"
            draggable={'false'}
          />
          <div />
        </div>
      </div>
    </div>
  )
}
