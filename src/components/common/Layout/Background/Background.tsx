import { BACKGROUND_TYPE_INFO } from '@/constants/styles'
import { ReactNode, useMemo } from 'react'
import St from './style'
import Image from 'next/image'
interface backgroundProps {
  type: string
  children: ReactNode
}

const Background = ({ type, children }: backgroundProps) => {
  const { img, color } = useMemo(() => BACKGROUND_TYPE_INFO[type], [type])
  return (
    <St.Root backgroundColor={color}>
      {img.src && (
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt="background Image"
          style={{ position: 'absolute', bottom: 0 }}
          priority
        />
      )}

      {children}
    </St.Root>
  )
}

export default Background
