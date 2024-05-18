import Drag from '@/components/drag'
import { getMax } from '@/lib'
import { useZIndex, useZIndexActions } from '@/store/island/zIndex'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useItems } from '@/store/island/items'
export default function DragPage() {
  const zIndex = useZIndex()
  const { setZIndex } = useZIndexActions()
  const items = useItems()
  useEffect(() => {
    console.log(items)
  }, [items])
  return (
    <div>
      <span>fdnskankl</span>
      <Container>
        {items.map((d, idx) => (
          <Drag key={idx} id={d.id} x={d.x} y={d.y} z={d.z} src={d.src} />
        ))}
      </Container>
    </div>
  )
}
const Container = styled.div`
  position: absolute;
`
