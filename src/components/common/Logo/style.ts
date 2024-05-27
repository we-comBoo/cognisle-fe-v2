import styled from '@emotion/styled'

const St = {
  LogoWrapper: styled.div<{ padding: number }>`
    width: fit-content;
    height: fit-content;
    padding-top: ${({ padding }) => (padding ? `${padding}rem` : '0')};
  `,
}

export default St
