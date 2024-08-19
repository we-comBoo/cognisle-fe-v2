import Drag from '@/components/drag'
import { getMax } from '@/lib/Draggable/zIndex'
import { useZIndexActions } from '@/store/island/zIndex'
import { useEffect } from 'react'
import { useItemsStore } from '@/store/island/items'
import { Items as St } from './style'

const Items = () => {
  const { setZIndex } = useZIndexActions()

  const items = useItemsStore()
  useEffect(() => {
    const maxZ = getMax('z', items) + 1
    console.log('getMax', maxZ)
    setZIndex(maxZ)
  }, [items])
  return (
    <St.StyledRoot>
      {items.map(({ no, item_image, locations: { x, y, z, show } }, idx) => (
        <>
          {show && (
            <Drag key={no} no={no} x={x} y={y} z={z} item_image={item_image} />
          )}
        </>
      ))}
    </St.StyledRoot>
  )
}

export default Items
