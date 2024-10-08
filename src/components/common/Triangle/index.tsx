import { TRIANGLE_TYPE_INFO } from '@/constants/styles'
import { TriangleProps } from '@/types/styles'
import Image from 'next/image'

const Triangle = ({ type }: TriangleProps) => {
  const { src, width, height, alt } = TRIANGLE_TYPE_INFO[type]
  return <Image src={src} width={width} height={height} alt={alt} priority />
}

export default Triangle
