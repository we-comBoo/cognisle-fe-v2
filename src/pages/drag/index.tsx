import Drag from '@/components/drag'
import { getMax } from '@/lib'
import { useZIndexActions } from '@/store/island/zIndex'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

import { items } from '@/constants/island'
export default function DragPage() {
  const { setZIndex } = useZIndexActions()

  useEffect(() => {
    const maxZ = getMax('z', items) + 1
    // console.log(maxZ)
    setZIndex(maxZ)
  }, [items])
  return (
    <div>
      <span>fdnskankl</span>
      <Container>
        {items.map(({ no, locations: { x, y, z }, item_image }, idx) => (
          <Drag key={idx} no={no} x={x} y={y} z={z} item_image={item_image} />
        ))}
      </Container>
    </div>
  )
}
const Container = styled.div`
  position: absolute;
`
