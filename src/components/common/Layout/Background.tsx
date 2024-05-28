import { BACKGROUND_INFO, BACKGROUND_PROPS } from '@/constants'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface backgroundProps {
  type: string
  children: ReactNode
}

const Background = ({ type, children }: backgroundProps) => {
  const { img, color } = BACKGROUND_INFO[type]
  return (
    <Wrapper img={img} backgroundColor={color}>
      {children}
    </Wrapper>
  )
}

export default Background

/*width: ${({ width }) => ( `${width}rem` : 'auto')};*/
export const Wrapper = styled.div<{
  backgroundColor: BACKGROUND_PROPS['color']
  img: BACKGROUND_PROPS['img']
}>`
  min-height: inherit;

  background: ${({ img, backgroundColor }) => `linear-gradient(
 ${backgroundColor['degree']},
      var(${backgroundColor['start']}),
      var(${backgroundColor['end']})
    ),
    url(${img['src']})`};
  background-size: ${({ img }) => `${img['width']}rem auto`};
  background-blend-mode: overlay;
  background-position: left bottom;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  flex-direction: column;
`
