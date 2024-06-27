import usePlayCards from './usePlayCards'
import CardContainer from './card'
import StateModal from '@/components/common/Modal/Game'
import { useModalStore, useModalActions } from '@/store/modal'
import { useEffect } from 'react'
import styled from '@emotion/styled'

const PlayCards = () => {
  const { cards, handleClick, clicked, obtain, status } = usePlayCards()
  console.log(cards)
  const isOpen = useModalStore()
  const { closeModal, openModal } = useModalActions()
  useEffect(() => {
    openModal()
  }, [status])
  return (
    <div>
      {isOpen && (
        <>
          <StateModal type={status} isOpen={isOpen} handleClose={closeModal} />
        </>
      )}
      <div>획득한 아이템 수 : {obtain}</div>
      <div>클릭한 아이템 수 : {clicked}</div>
      <CardsContainer>
        {cards.map(({ symbol, status }, idx) => (
          <CardContainer
            key={idx}
            onClick={() => handleClick(idx)}
            status={status}
            symbol={symbol}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default PlayCards

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 8.2rem);
  grid-template-rows: repeat(4, 12.4rem);
  gap: 2.4rem 1.2rem;
`
