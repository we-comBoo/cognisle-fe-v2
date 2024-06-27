import styled from '@emotion/styled'
import { MouseEventHandler } from 'react'
import useCards from '../useCards'

interface CardProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  status: string
  symbol: string
}

const CardContent = ({ status, symbol }: CardProps) => {
  return <>{status === 'faceDown' ? <>faceDown</> : <>{symbol}</>}</>
}

const CardContainer = ({ onClick, status, symbol }: CardProps) => {
  return (
    <St.cardContainer onClick={onClick} status={status}>
      <CardContent status={status} symbol={symbol} />
    </St.cardContainer>
  )
}

export default CardContainer

const St = {
  cardContainer: styled.button<{ status: string }>`
    background-color: ${({ status }) =>
      status === 'faceDown'
        ? `var(--color-yellow-100)`
        : `var(--color-green-100)`};

    width: 8.2rem;
    height: 12.4rem;
    box-shadow: 0rem 0.3rem 0.6rem var(--color-pink-100);
    margin: 0.3rem;
  `,
}
