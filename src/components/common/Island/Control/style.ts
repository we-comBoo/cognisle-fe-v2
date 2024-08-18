import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'

const Layout = {
  styledRoot: styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 2.5rem;
    justify-content: space-between;
    position: relative;
    top: 2.4rem;
    width: 90%;
  `,
}

const Btn = {
  StyledRoot: styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
  `,
  Save: styled.button`
    background-color: var(--color-yellow-100);
    color: var(--color-green-400);
    ${FONTS.body5};
    border-radius: 50%;
    width: 4.8rem;
    height: 4.8rem;
    cursor: pointer;
  `,
  Mode: styled.button`
    cursor: pointer;
  `,
}

const Text = styled.div`
  color: var(--color-green-400);
  ${FONTS.body5};
`

export { Btn, Layout, Text }
