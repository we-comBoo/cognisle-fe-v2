import styled from '@emotion/styled'
import Image from 'next/image'
import { dragEventHandler } from '@/lib/dragEvent'
import { ItemProps } from '@/types/island/item'
import { useItemsActions } from '@/store/island/items'
import { useZIndex } from '@/store/island/zIndex'

interface DragProps {
  no: ItemProps['no']
  x: ItemProps['locations']['x']
  y: ItemProps['locations']['y']
  z: ItemProps['locations']['z']
  item_image: ItemProps['item_image']
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
  x: ItemProps['locations']['x']
  y: ItemProps['locations']['y']
  z: ItemProps['locations']['z']
}>`
  transform: ${({ x, y }) => `translateX(${x}px) translateY(${y}px)`};
  z-index: ${({ z }) => `${z}`};
  position: relative;
  width: fit-content;
  height: fit-content;
`
