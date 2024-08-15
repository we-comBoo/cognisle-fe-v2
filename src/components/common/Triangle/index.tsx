import { TRIANGLE_TYPE_INFO } from '@/constants/styles'
import { TriangleProps } from '@/types/styles'

import Icon from '@/components/icon'

const Triangle = ({ type }: TriangleProps) => {
  const { icon, width, height } = TRIANGLE_TYPE_INFO[type]
  return (
    <Icon
      icon={icon}
      path="assets/triangle"
      file="triangle"
      width={width}
      height={height}
    />
  )
}

export default Triangle
