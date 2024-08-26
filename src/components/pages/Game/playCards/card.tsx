import styled from '@emotion/styled'
import { MouseEventHandler } from 'react'
import Image from 'next/image'
import { GameCardStatus, GameCardStatusKey } from '@/types/game'
import { IMAGE_ADDRESS } from '@/constants/styles'
interface CardProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  status: GameCardStatusKey
  number: number
}

const CardContent = ({ status, number }: CardProps) => {
  console.log(number, status === GameCardStatus.FACE_DOWN)
  return (
    <St.ContentContainer>
      {status === GameCardStatus.FACE_DOWN ? (
        <Image
          src={IMAGE_ADDRESS.CARD_FACE_DOWN}
          alt="card faceDown"
          width={82}
          height={124}
        />
      ) : (
        <Image
          src={`${IMAGE_ADDRESS.CARD_FACE_UP}/${number}.png`}
          alt="card faceDown"
          width={82}
          height={124}
        />
      )}
    </St.ContentContainer>
  )
}

const CardContainer = ({ onClick, status, number }: CardProps) => {
  return (
    <St.CardContainer onClick={onClick}>
      <CardContent status={status} number={number} />
    </St.CardContainer>
  )
}

export default CardContainer

const St = {
  CardContainer: styled.button`
    background-color: 'transparent';
    box-shadow: 0rem 0.3rem 0.6rem var(--color-pink-100);
    margin: 0.3rem;
  `,
  ContentContainer: styled.div`
    width: 8.2rem;
    height: 12.4rem;
  `,
}
