import { LOGO_INFO } from '@/constants'
import Image from 'next/image'
import St from './style'
import { LogoProps } from '@/types'

const Logo = ({ type, padding }: LogoProps) => {
  console.log(type, padding, LOGO_INFO)
  const { src, width, height, alt } = LOGO_INFO[type]
  console.log(LOGO_INFO)
  return (
    <St.LogoWrapper padding={padding}>
      <Image src={src} width={width} height={height} alt={alt} priority />
    </St.LogoWrapper>
  )
}

export default Logo
