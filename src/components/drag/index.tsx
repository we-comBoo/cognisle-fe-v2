import styled from '@emotion/styled'
import Image from 'next/image'
import { dragEventHandler } from '@/lib/dragEvent'
import { ItemProps } from '@/types/island/item'
import { useItemsActions } from '@/store/island/items'
import { useZIndex } from '@/store/island/zIndex'

export default function Drag({ id, x, y, z, src }: ItemProps) {
  const { updateItem } = useItemsActions()
  const zIndex = useZIndex()
  // console.log('item', id, x, y)
  return (
    <DragComponent
      x={x}
      y={y}
      z={z}
      {...dragEventHandler(updateItem, x, y, zIndex, id, src)}
    >
      <Image
        src={src}
        alt={`item_${id}`}
        draggable={'false'}
        width={300}
        height={300}
      />
    </DragComponent>
  )
}

const DragComponent = styled.div<{
  x: ItemProps['x']
  y: ItemProps['y']
  z: ItemProps['z']
}>`
  transform: ${({ x, y }) => `translateX(${x}px) translateY(${y}px)`};
  z-index: ${({ z }) => `${z}`};
  position: relative;
`
