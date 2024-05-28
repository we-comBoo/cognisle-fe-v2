import { LOGO_TYPE_INFO } from '@/constants'
import Image from 'next/image'
import St from './style'
import { LogoProps } from '@/types'

const Logo = ({ type, padding }: LogoProps) => {
  const { src, width, height, alt } = LOGO_TYPE_INFO[type]

  return (
    <St.LogoWrapper padding={padding ?? 0}>
      <Image src={src} width={width} height={height} alt={alt} priority />
    </St.LogoWrapper>
  )
}

export default Logo
