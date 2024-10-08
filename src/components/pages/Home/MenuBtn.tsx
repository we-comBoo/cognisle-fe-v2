import PointBtn from '@/components/common/Button'
import { MENU_POINT_BTN } from '@/constants/styles'
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
import { HOME_MENU_INFO } from '@/constants/menu'

const MenuBtn = () => {
  return (
    <Container>
      {HOME_MENU_INFO.map(({ link, img, text }, idx) => (
        <PointBtn item={MENU_POINT_BTN} key={idx}>
          <Link href={link}>
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              alt={text}
              priority
            />
            <Text>{text}</Text>
          </Link>
        </PointBtn>
      ))}
    </Container>
  )
}

export default MenuBtn

const Container = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  gap: 2.8rem;
`

const Text = styled.div`
  color: var(--color-yellow-100);
  ${FONTS.body5}
`
