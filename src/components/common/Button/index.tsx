import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
import { PointBtnInfoProps } from '@/types/button'
import { ReactNode } from 'react'

const DefaultBtn = styled.button`
  border-radius: 0 1.5rem 1.5rem 1.5rem;
  width: 100%;
`
const FormBtn = styled(DefaultBtn)`
  color: var(--color-yellow-100);
  background-color: var(--color-green-400);
  height: 4rem;
  ${FONTS.body3}
`

interface PointBtnProps {
  item: PointBtnInfoProps
  children: ReactNode
}

const PointBtn = ({ item, children }: PointBtnProps) => {
  const { size, point, color, round } = item
  return (
    <Container
      width={size.width}
      height={size.height ?? size.width}
      color={color.main}
      round={round}
    >
      <Point
        color={color.point}
        width={point.width}
        height={point.height ?? point.width}
      />
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  )
}

export { FormBtn, PointBtn }

const Container = styled.div<{
  width: PointBtnInfoProps['size']['width']
  height: PointBtnInfoProps['size']['height']
  color: PointBtnInfoProps['color']['main']
  round: PointBtnInfoProps['round']
}>`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  position: relative;
  background-color: ${({ color }) => `var(${color})`};
  border-radius: ${({ round }) => (round ? '1.5rem' : '0rem')};
  box-shadow: ${({ color }) => `0rem 0.3rem 0.3rem -0.2rem var(${color})`};
`

const Point = styled.div<{
  width: PointBtnInfoProps['point']['width']
  height: PointBtnInfoProps['point']['height']
  color: PointBtnInfoProps['color']['point']
}>`
  width: inherit;
  height: inherit;
  background-color: ${({ color }) => `var(${color})`};
  clip-path: ${({ height, width }) =>
    `polygon(${width}% 0%, 0% 0%, 0% ${height}%);`};
`
const ContentWrapper = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.2rem;
`
