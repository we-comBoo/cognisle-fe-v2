import { BACKGROUND_INFO } from '@/constants'
import styled from '@emotion/styled'

interface backgroundProps {
  type?: string
  children: ReactNode
}

const Background = ({ type, children }: backgroundProps) => {
  const styles = BACKGROUND_INFO[type]
  return <Wrapper {...styles}>{children}</Wrapper>
}

export default Background

/*width: ${({ width }) => ( `${width}rem` : 'auto')};*/
const Wrapper = styled.div`
  min-height: inherit;

  background: ${({ img, color }) => `linear-gradient(
 ${color['degree']},
      var(${color['start']}),
      var(${color['end']})
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
