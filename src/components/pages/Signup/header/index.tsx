import { Logo, Triangle } from '@/components/common'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const Header = () => {
  return (
    <>
      <Logo type="primary" />
      <TitleWrapper>
        회원 가입
        <Triangle type="authTitle" />
      </TitleWrapper>
    </>
  )
}

export default Header

const TitleWrapper = styled.div`
  ${FONTS.body2}
  color: var(--color-green-400);
  text-align: center;
  display: flex;
  flex-direction: column;
`
