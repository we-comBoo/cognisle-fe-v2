import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
const Root = styled.div`
  /*z-index: 9998;*/

  width: 100%;
`
const Select = styled.div`
  height: 16.8rem;
  background-color: var(--color-yellow-100);
`

const Land = {
  Root: styled.div`
    padding: 2.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
}

const Tab = {
  Root: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Text: styled.span`
    ${FONTS.body5}
    color:var(--color-green-400);
  `,
}

const St = {
  Root,
  Select,
  Land,
  Tab,
}

export default St
