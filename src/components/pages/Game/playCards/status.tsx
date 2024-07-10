import { FONTS } from '@/styles/font'
import { GameCardsProps } from '@/types'
import styled from '@emotion/styled'
import Image from 'next/image'

interface StatusProps {
  obtain: GameCardsProps
}

const Status = ({ obtain }: StatusProps) => {
  return (
    <Wrapper>
      <Image
        src={'/assets/yellow/card.svg'}
        alt="game card"
        height={35}
        width={26}
      />
      <Text>획득한 아이템 개수 : {obtain.length}</Text>
    </Wrapper>
  )
}

export default Status

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`

const Text = styled.span`
  margin-left: 1rem;
  color: var(--color-yellow-100);
  ${FONTS.body3};
`
