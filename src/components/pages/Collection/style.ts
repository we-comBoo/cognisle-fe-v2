import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'

const Item = {
  StyledRoot: styled.div`
    display: grid;
    grid-template-columns: min-content min-content min-content;
    column-gap: 2.6rem;
    row-gap: 3.1rem;
  `,
}
const Divider = {
  StyledRoot: styled.div`
    margin: 3rem 0;
  `,
}

const Status = {
  StyledRoot: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.7rem;
  `,
  Text: styled.p`
    ${FONTS.body1}
    color:var(--color-yellow-100);
  `,
}

export { Item, Divider, Status }
