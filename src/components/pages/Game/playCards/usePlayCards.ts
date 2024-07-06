import { shuffle } from '@/lib'
import {
  GameStateKeyProps,
  GameStateContentProps,
  GameBoardProps,
} from '@/types'
import { useEffect, useRef, useState } from 'react'

const usePlayCards = () => {
  const [{ items, cards }, setCards] = useState<GameBoardProps>({
    items: [],
    cards: [],
  })
  const [status, setStatus] = useState<GameStateKeyProps>('start')
  const [time, setTime] = useState<GameStateContentProps['time']>({
    start: new Date(),
    end: null,
  })
  const [currentMatched, setCurrentMatched] =
    useState<GameStateContentProps['currentMatched']>(-1)
  const disabled = useRef(false)
  const prevIndex = useRef(-1)
  const [clicked, setClicked] = useState<GameStateContentProps['clicked']>(0)
  const [obtain, setObtain] = useState(0)
  const MAX_OBTAIN_COUNT = 8

  useEffect(() => {
    const { items, cards } = shuffle()
    console.log(cards)
    setCards({ items, cards })
  }, [])

  useEffect(() => {
    if (status == 'matched' && 0 < obtain && obtain <= MAX_OBTAIN_COUNT) {
      setTimeout(() => {
        setStatus('choosing')
        console.log('choosing 상태 변경')
      }, 4000)
    }
    if (status == 'choosing' && obtain === MAX_OBTAIN_COUNT) {
      setTime((prev) => ({ ...prev, end: new Date() }))

      setStatus('clear')
      console.log('clear 상태 변경')
      setTimeout(() => {
        setStatus('result')
        console.log('result 상태 변경')
      }, 4000)
    }
  }, [obtain, status])

  const updateStatus = (
    cardArr: { status: string; symbol: string }[],
    status: string,
  ) => {
    cardArr.forEach((card) => (card.status = status))
    setCards((prev) => ({ ...prev, cards: [...cards] }))
  }

  const handleClick = (currIndex: number) => {
    console.log(disabled.current, currIndex, items)
    // 카드 누르면 안되는 상황
    if (disabled.current) {
      return
    }
    setClicked((prev) => prev + 1)
    const curr = cards[currIndex]
    const prev = cards[prevIndex.current]
    console.log(curr, prev)
    // 선택한 카드가 이미 매칭된 상황
    if (curr.status === 'matched') return
    // 카드 뒤집는 상태로 업데이트
    updateStatus([curr], 'faceUp')

    // 짝맞는 상황은 아니고 그냥 한쪽만 업데이트
    if (!prev || prevIndex.current === currIndex) {
      console.log('짝 안 맞음')
      prevIndex.current = currIndex
      return
    }

    // 짝이 맞는 경우
    // 5. If card symbols match
    if (curr.symbol === prev.symbol) {
      console.log('짝 맞음')
      setCurrentMatched(curr.symbol)
      updateStatus([curr, prev], 'matched')
      setObtain((prev) => prev + 1)
      setStatus('matched')
    }

    // 짝이 안 맞는 경우
    else {
      disabled.current = true
      setTimeout(() => {
        updateStatus([curr, prev], 'faceDown')
        disabled.current = false
      }, 2000)
    }

    // 인덱스 초기화
    prevIndex.current = -1
  }

  return {
    cards,
    items,
    handleClick,
    currentMatched,
    clicked,
    obtain,
    status,
    time,
  }
}

export default usePlayCards
