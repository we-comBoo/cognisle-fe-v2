import { BackgroundInfoProps } from '@/types/styles'
import styled from '@emotion/styled'

export const Root = styled.div<{
  backgroundColor: BackgroundInfoProps['color']
}>`
  min-height: inherit;

  background: ${({ backgroundColor }) => `linear-gradient(
 ${backgroundColor['degree']},
      var(${backgroundColor['start']}),
      var(${backgroundColor['end']})
    )`};

  display: flex;
  align-items: center;
  flex-direction: column;
  div {
    z-index: 1;
  }
`

const St = {
  Root,
}

export default St
