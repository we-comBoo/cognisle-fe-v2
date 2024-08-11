import styled from '@emotion/styled'
import Drag from '@/components/drag'
import { getMax } from '@/lib'
import { useZIndexActions } from '@/store/island/zIndex'
import { useEffect } from 'react'
import { useItems } from '@/store/island/items'
const Items = () => {
  const { setZIndex } = useZIndexActions()
  const items = useItems()
  useEffect(() => {
    const maxZ = getMax('z', items) + 1
    // console.log(maxZ)
    setZIndex(maxZ)
  }, [items])
  return (
    <Container>
      {items.map((d, idx) => (
        <Drag key={idx} id={d.id} x={d.x} y={d.y} z={d.z} src={d.src} />
      ))}
    </Container>
  )
}

export default Items

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: inherit;
`
