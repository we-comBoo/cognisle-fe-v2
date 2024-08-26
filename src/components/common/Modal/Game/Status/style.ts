import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const DefaultLayout = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-yellow-01);
  color: var(--color-pink-100);
`

const ColunmWrap = styled(DefaultLayout)`
  flex-direction: column;
`

const RowWrap = styled(DefaultLayout)`
  flex-direction: row;
`

const Text = styled.p`
  ${FONTS.h1}
`

const SubText = styled.p`
  ${FONTS.body3}
`
export const St = {
  Text,
  SubText,

  ColunmWrap,

  RowWrap,

  Content: {
    Title: styled(RowWrap)`
      margin-bottom: 1rem;
    `,

    ListWrapper: styled(ColunmWrap)`
      align-items: center;
      justify-content: center;
    `,
    ResultWrapper: styled(RowWrap)``,
  },
}
