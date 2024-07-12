import usePlayCards from './usePlayCards'
import CardContainer from './card'
import StateModal from '@/components/common/Modal/Game'
import { useModalStore, useModalActions } from '@/store/modal'
import { useEffect } from 'react'
import styled from '@emotion/styled'
import Status from './status'
import { GameStatus } from '@/types'

const PlayCards = () => {
  const {
    cards,
    playState: { currentMatched, obtained, clicked, userStatus, time },
    handleClick,
  } = usePlayCards()
  // console.log(cards)
  const isOpen = useModalStore()
  const { closeModal, openModal } = useModalActions()
  useEffect(() => {
    if (userStatus != GameStatus.CHOOSING) {
      openModal()
      console.log(userStatus, '모달 열기')
    }
  }, [userStatus])

  return (
    <GameWrapper>
      {isOpen && (
        <>
          <StateModal
            type={userStatus}
            isOpen={isOpen}
            content={{ currentMatched, obtained, clicked, userStatus, time }}
            handleClose={closeModal}
          />
        </>
      )}
      <Status obtain={obtained} />
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
