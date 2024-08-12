import styled from '@emotion/styled'

const St = {
  Root: styled.div<{ padding: number }>`
    width: fit-content;
    height: fit-content;
    padding: ${({ padding }) => `${padding}rem`};
  `,
}

export default St
