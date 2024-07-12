import { IMAGE_ADDRESS } from '@/constants'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import Image from 'next/image'

const Header = () => {
  return (
    <TitleWrapper>
      <p>친구의 섬 ID</p>
      <Image
        src={IMAGE_ADDRESS.LAND_TITLE}
        width={51}
        height={21}
        alt="친구섬 찾기 아이콘"
      />
    </TitleWrapper>
  )
}

export default Header

const TitleWrapper = styled.div`
  ${FONTS.body2}
  color: var(--color-green-400);
  text-align: center;
  display: flex;
  flex-direction: column;

  margin-bottom: 3rem;
  align-items: center;
`
