import { BACKGROUND_TYPE_INFO } from '@/constants/styles'
import { ReactNode } from 'react'
import St from './style'
interface backgroundProps {
  type: string
  children: ReactNode
}

const Background = ({ type, children }: backgroundProps) => {
  const { img, color } = BACKGROUND_TYPE_INFO[type]
  return (
    <St.Root img={img} backgroundColor={color}>
      {children}
    </St.Root>
  )
}

export default Background

/*width: ${({ width }) => ( `${width}rem` : 'auto')};*/
