import useCards from '../useCards'
import CardContainer from './card'

const PlayBoard = () => {
  const { cards, handleClick, clicked, obtain } = useCards()
  console.log(cards)
  return (
    <div>
      <div>획득한 아이템 수 : {obtain}</div>
      <div>클릭한 아이템 수 : {clicked}</div>
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
