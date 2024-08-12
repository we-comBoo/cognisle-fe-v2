import styled from '@emotion/styled'
import Drag from '@/components/drag'
import { getMax } from '@/lib'
import { useZIndexActions } from '@/store/island/zIndex'
import { useEffect } from 'react'
import { useItems } from '@/store/island/items'
import St from './style'

const Items = () => {
  const { setZIndex } = useZIndexActions()
  const items = useItems()
  useEffect(() => {
    const maxZ = getMax('z', items) + 1
    // console.log(maxZ)
    setZIndex(maxZ)
  }, [items])
  return (
    <St.Items.Root>
      {items.map((d, idx) => (
        <Drag key={idx} id={d.id} x={d.x} y={d.y} z={d.z} src={d.src} />
      ))}
    </St.Items.Root>
  )
}

export default Items
