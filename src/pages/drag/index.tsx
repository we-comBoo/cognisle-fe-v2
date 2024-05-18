import Drag from '@/components/drag'
import { getMax } from '@/lib'
import { useZIndex, useZIndexActions } from '@/store/island/zIndex'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { dataTemp } from '@/constants/islandItems'
export default function DragPage() {
  const zIndex = useZIndex()
  const { setZIndex } = useZIndexActions()
  const [data, setData] = useState(dataTemp)
  useEffect(() => {
    setZIndex(getMax('originalZ', data))
  }, [])
  console.log('Z-index', zIndex, getMax('originalZ', data))
  return (
    <div>
      <span>fdnskankl</span>
      <Container>
        {data.map((d, idx) => (
          <Drag
            key={idx}
            originalX={d.x}
            originalY={d.y}
            originalZ={d.z}
            src={d.src}
          />
        ))}
      </Container>
    </div>
  )
}
const Container = styled.div`
  position: absolute;
`
