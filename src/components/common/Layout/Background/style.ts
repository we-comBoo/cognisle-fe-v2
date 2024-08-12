import { BackgroundInfoProps } from '@/types/styles'
import styled from '@emotion/styled'

export const Root = styled.div<{
  backgroundColor: BackgroundInfoProps['color']
  img: BackgroundInfoProps['img']
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

const St = {
  Root,
}

export default St
