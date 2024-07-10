import { IMAGE_ADDRESS } from '@/constants'
import styled from '@emotion/styled'
import { MouseEventHandler } from 'react'
import Image from 'next/image'
interface CardProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  status: string
  symbol: string
}

const CardContent = ({ status, symbol }: CardProps) => {
  return (
    <St.ContentContainer>
      {status === 'faceDown' ? (
        <Image
          src={IMAGE_ADDRESS.cardFaceDown}
          alt="card faceDown"
          width={82}
          height={124}
        />
      ) : (
        <>{symbol}</>
      )}
    </St.ContentContainer>
  )
}

const CardContainer = ({ onClick, status, symbol }: CardProps) => {
  return (
    <St.CardContainer onClick={onClick} status={status}>
      <CardContent status={status} symbol={symbol} />
    </St.CardContainer>
  )
}

export default CardContainer

const St = {
  CardContainer: styled.button<{ status: string }>`
    background-color: ${({ status }) =>
      status === 'faceDown' ? 'transparent' : `var(--color-green-100)`};

    box-shadow: 0rem 0.3rem 0.6rem var(--color-pink-100);
    margin: 0.3rem;
  `,
  ContentContainer: styled.div`
    width: 8.2rem;
    height: 12.4rem;
  `,
}
