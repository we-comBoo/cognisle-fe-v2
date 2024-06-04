import { TRIANGLE_TYPE_INFO } from '@/constants'
import { TriangleProps } from '@/types'
import Image from 'next/image'

const Triangle = ({ type }: TriangleProps) => {
  const { src, width, height, alt } = TRIANGLE_TYPE_INFO[type]
  return <Image src={src} width={width} height={height} alt={alt} />
}

export default Triangle
