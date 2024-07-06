import { shuffle } from '@/lib'
import { GameStateKeyProps, GameStateContentProps } from '@/types'
import { useEffect, useRef, useState } from 'react'

const usePlayCards = () => {
  const [cards, setCards] = useState(shuffle())
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
  const [obtain, setObtain] = useState(7)
  const MAX_OBTAIN_COUNT = 8

  useEffect(() => {
    if (0 < obtain && obtain <= MAX_OBTAIN_COUNT) {
      setTimeout(() => {
        setStatus('choosing')
      }, 3000)
    }
  }, [obtain])

  useEffect(() => {
    if (status == 'choosing' && obtain === MAX_OBTAIN_COUNT) {
      setTime((prev) => ({ ...prev, end: new Date() }))
      setStatus('clear')
      setTimeout(() => {
        setStatus('result')
      }, 3000)
    }
  }, [status])

  const updateStatus = (
    cardArr: { status: string; symbol: string }[],
    status: string,
  ) => {
    cardArr.forEach((card) => (card.status = status))
    setCards([...cards])
  }

  const handleClick = (currIndex: number) => {
    console.log(disabled.current, currIndex)
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

  return { cards, handleClick, currentMatched, clicked, obtain, status, time }
}

export default usePlayCards
