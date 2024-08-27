import { IMAGE_ADDRESS } from '@/constants/styles'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import Image from 'next/image'

const Title = ({ title }: { title: string }) => {
  return (
    <TitleWrapper>
      <p>{title}</p>
      <Image
        src={IMAGE_ADDRESS.LAND_TITLE}
        width={51}
        height={21}
        alt="친구섬 찾기 아이콘"
      />
    </TitleWrapper>
  )
}

export default Title

const TitleWrapper = styled.div`
  ${FONTS.body2}
  color: var(--color-green-400);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
