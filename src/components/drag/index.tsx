import styled from '@emotion/styled'
import Image from 'next/image'
import { dragEventHandler } from '@/lib/Draggable/dragEvent'
import { ItemInfoProps } from '@/types/island/item'
import { useItemsActions } from '@/store/island/items'
import { useZIndex } from '@/store/island/zIndex'

interface DragProps {
  no: ItemInfoProps['no']
  x: ItemInfoProps['locations']['x']
  y: ItemInfoProps['locations']['y']
  z: ItemInfoProps['locations']['z']
  item_image: ItemInfoProps['item_image']
}

export default function Drag({ no, x, y, z, item_image }: DragProps) {
  const { updateItem } = useItemsActions()

  const zIndex = useZIndex()

  return (
    <DragComponent
      x={x}
      y={y}
      z={z}
      {...dragEventHandler(updateItem, x, y, zIndex, no, item_image)}
    >
      <Image
        src={item_image}
        alt={`item_${no}`}
        draggable={'false'}
        width={30}
        height={30}
      />
    </DragComponent>
  )
}

const DragComponent = styled.div<{
  x: ItemInfoProps['locations']['x']
  y: ItemInfoProps['locations']['y']
  z: ItemInfoProps['locations']['z']
}>`
  transform: ${({ x, y }) => `translateX(${x}px) translateY(${y}px)`};
  z-index: ${({ z }) => `${z}`};
  position: absolute;
  width: fit-content;
  height: fit-content;
`
