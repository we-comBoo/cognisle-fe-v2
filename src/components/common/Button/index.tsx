import { PointBtnInfoProps } from '@/types/button'
import { ReactNode } from 'react'
import St from './style'
interface PointBtnProps {
  item: PointBtnInfoProps
  children: ReactNode
}

const PointBtn = ({ item, children }: PointBtnProps) => {
  const { size, point, color, round } = item
  return (
    <St.Root
      width={size.width}
      height={size.height ?? size.width}
      color={color.main}
      round={round}
    >
      <St.Point
        color={color.point}
        width={point.width}
        height={point.height ?? point.width}
      />
      <St.ContentWrapper>{children}</St.ContentWrapper>
    </St.Root>
  )
}

export default PointBtn
