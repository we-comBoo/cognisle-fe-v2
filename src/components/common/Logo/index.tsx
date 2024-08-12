import { LOGO_TYPE_INFO } from '@/constants/styles'
import Image from 'next/image'
import St from './style'
import { LogoProps } from '@/types/styles'

const Logo = ({ type, padding }: LogoProps) => {
  const { src, width, height, alt } = LOGO_TYPE_INFO[type]

  return (
    <St.Root padding={padding ?? 0}>
      <Image src={src} width={width} height={height} alt={alt} priority />
    </St.Root>
  )
}

export default Logo
