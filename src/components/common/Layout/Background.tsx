import { BACKGROUND_TYPE_INFO } from '@/constants'
import { backgroundInfoProps } from '@/types'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface backgroundProps {
  type: string
  children: ReactNode
}

const Background = ({ type, children }: backgroundProps) => {
  const { img, color } = BACKGROUND_TYPE_INFO[type]
  return (
    <Wrapper img={img} backgroundColor={color}>
      {children}
    </Wrapper>
  )
}

export default Background

/*width: ${({ width }) => ( `${width}rem` : 'auto')};*/
export const Wrapper = styled.div<{
  backgroundColor: backgroundInfoProps['color']
  img: backgroundInfoProps['img']
}>`
  min-height: inherit;

  background: ${({ img, backgroundColor }) => `linear-gradient(
 ${backgroundColor['degree']},
      var(${backgroundColor['start']}),
      var(${backgroundColor['end']})
    ),
    url(${img['src']})`};
  background-size: ${({ img }) => `43rem, ${img['width']}rem auto`};
  background-blend-mode: overlay;
  background-position: left bottom;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  flex-direction: column;
`
