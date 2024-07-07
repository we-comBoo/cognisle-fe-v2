import usePlayCards from './usePlayCards'
import CardContainer from './card'
import StateModal from '@/components/common/Modal/Game'
import { useModalStore, useModalActions } from '@/store/modal'
import { useEffect } from 'react'
import styled from '@emotion/styled'
import Status from './status'

const PlayCards = () => {
  const {
    cards,
    items,
    handleClick,
    clicked,
    currentMatched,
    obtain,
    status,
    time,
  } = usePlayCards()
  // console.log(cards)
  const isOpen = useModalStore()
  const { closeModal, openModal } = useModalActions()
  useEffect(() => {
    if (status != 'choosing') {
      openModal()
      console.log(status, '모달 열기')
    }
  }, [status])
  return (
    <GameWrapper>
      {isOpen && (
        <>
          <StateModal
            type={status}
            isOpen={isOpen}
            content={{ currentMatched, clicked, time, items }}
            handleClose={closeModal}
          />
        </>
      )}
      <Status obtain={obtain} />
      {/*<div>클릭한 아이템 수 : {clicked}</div>*/}
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
    </GameWrapper>
  )
}

export default PlayCards

const GameWrapper = styled.div`
  margin-top: 6rem;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 8.2rem);
  grid-template-rows: repeat(4, 12.4rem);
  gap: 2.4rem 1.2rem;
`
