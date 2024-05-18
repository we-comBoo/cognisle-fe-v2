import Drag from '@/components/drag'
import { getMax } from '@/lib'
import { useZIndex, useZIndexActions } from '@/store/island/zIndex'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const dataTemp = [
  {
    originalX: 100,
    originalY: 100,
    originalZ: 3,
    src: 'https://cdn-icons-png.flaticon.com/512/495/495976.png',
  },
  {
    originalX: 150,
    originalY: 200,
    originalZ: 2,
    src: 'https://cdn-icons-png.flaticon.com/512/3094/3094965.png',
  },
  {
    originalX: 200,
    originalY: 300,
    originalZ: 1,
    src: 'https://cdn-icons-png.flaticon.com/512/489/489969.png',
  },
]
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
            originalX={d.originalX}
            originalY={d.originalY}
            originalZ={d.originalZ}
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
