import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const Root = styled.div<{ color: string }>`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: ${({ color }) => `${color}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Text = styled.div`
  ${FONTS.h1}
  color:var(--color-orange-300);
`

const St = {
  Root,
  Content,
  Text,
}

export default St
