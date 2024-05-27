import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'

const Button = styled.button`
  border-radius: 0 1.5rem 1.5rem 1.5rem;
  width: 100%;
`

const FormBtn = styled(Button)`
  color: var(--color-yellow-100);
  background-color: var(--color-green-400);
  height: 4rem;
  ${FONTS.body3}
`
export { Button, FormBtn }
