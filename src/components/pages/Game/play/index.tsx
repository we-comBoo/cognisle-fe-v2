import useCards from '../useCards'
import CardContainer from './card'

const PlayBoard = () => {
  const { cards, handleClick } = useCards()
  console.log(cards)
  return (
    <div>
      {cards.map(({ symbol, status }, idx) => (
        <CardContainer
          key={idx}
          onClick={() => handleClick(idx)}
          status={status}
          symbol={symbol}
        />
      ))}
    </div>
  )
}

export default PlayBoard
