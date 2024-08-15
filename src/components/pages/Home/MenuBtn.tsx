import PointBtn from '@/components/common/Button'
import { MENU_POINT_BTN } from '@/constants/styles'
import Link from 'next/link'
import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
import { HOME_MENU_INFO } from '@/constants/menu'
import Icon from '@/components/icon'

const MenuBtn = () => {
  return (
    <Container>
      {HOME_MENU_INFO.map(({ link, icon, text, height, width }, idx) => (
        <PointBtn item={MENU_POINT_BTN} key={idx}>
          <Link href={link}>
            <Icon
              path="assets/yellow"
              file="menu"
              icon={icon}
              height={height}
              width={width}
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
  margin-top: 1rem;
  ${FONTS.body5}
`
