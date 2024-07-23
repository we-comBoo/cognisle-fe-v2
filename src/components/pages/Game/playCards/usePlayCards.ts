import { shuffle } from '@/lib'
import {
  GameCardsProps,
  GameCardStatus,
  GameCardStatusKey,
  playStateProps,
  playStateActionProps,
  playStateAction,
  GameStatus,
} from '@/types'
import { useEffect, useReducer, useRef, useState } from 'react'

/**
 *
 * @전체카드리스트: cards
 * @게임진행상태: status
 * @소요시간: time
 * @이전에선택한카드번호
 * @가장최근에매칭된카드번호
 * @클릭횟수
 * @획득한카드번호s
 *
 *
 */

// 초기 플레이 상태 정의
const playInitialState: playStateProps = {
  currentMatched: null, //가장최근에매칭된카드번호
  obtained: [], // 획득한카드번호s
  clicked: 0, // 클릭횟수
  userStatus: GameStatus.START, //유저의플레이상태
  time: {
    start: new Date(), //게임시작시간
    end: null, //게임종료시간
  },
}

// 플레이 리듀서 함수 정의
const playReducer = (
  state: playStateProps,
  action: playStateActionProps,
): playStateProps => {
  switch (action.type) {
    case playStateAction.INCREASE_CLICKED:
      return {
        ...state,
        clicked: state.clicked + 1,
      }
    case playStateAction.OBTAIN_CARD:
      const obtainedCard = action.payload.card
      const status = action.payload.status
      //console.log(obtainedCard)
      return {
        ...state,
        userStatus: status,
        currentMatched: action.payload.card,
        obtained: [...state.obtained, obtainedCard],
      }
    case playStateAction.CHANGE_USER_STATUS:
      const userStatus = action.payload.status

      return userStatus === GameStatus.RESULT
        ? {
            // 게임 종료된 상태로 업데이트
            ...state,
            time: { ...state.time, end: new Date() },
            userStatus,
          }
        : {
            // 게임 종료가 아닌 단순 카드 획득 업데이트
            ...state,
            userStatus,
          }

    default:
      return state
  }
}
const usePlayCards = () => {
  const disabled = useRef(false)
  const prevIndex = useRef(-1)
  const MAX_OBTAIN_COUNT = 8
  const [cards, setCards] = useState<GameCardsProps>([])
  const [playState, dispatch] = useReducer(playReducer, playInitialState)

  useEffect(() => {
    const cards = shuffle()
    console.log(cards)
    setCards(cards)
  }, [])

  useEffect(() => {
    console.log(playState)
    const { userStatus, obtained } = playState
    if (userStatus === GameStatus.MATCHED) {
      setTimeout(() => {
        dispatch({
          type: playStateAction.CHANGE_USER_STATUS,
          payload: { status: GameStatus.CHOOSING },
        })
      }, 3000)
    } else if (
      userStatus === GameStatus.CHOOSING &&
      obtained.length === MAX_OBTAIN_COUNT
    ) {
      dispatch({
        type: playStateAction.CHANGE_USER_STATUS,
        payload: { status: GameStatus.CLEAR },
      })
    } else if (userStatus === GameStatus.CLEAR) {
      setTimeout(() => {
        dispatch({
          type: playStateAction.CHANGE_USER_STATUS,
          payload: { status: GameStatus.RESULT },
        })
      }, 5000)
    }
  }, [playState.obtained, playState.userStatus])

  const updateStatus = (cardArr: GameCardsProps, status: GameCardStatusKey) => {
    cardArr.forEach((card) => (card.status = status))
    //console.log([...cards])
    setCards([...cards])
  }

  const handleClick = (currIndex: number) => {
    //(disabled.current, currIndex)
    // 카드 누르면 안되는 상황
    if (disabled.current) {
      return
    }

    const curr = cards[currIndex]
    const prev = cards[prevIndex.current]
    // console.log(curr, prev)
    // 선택한 카드가 이미 매칭된 상황
    dispatch({ type: playStateAction.INCREASE_CLICKED })
    if (curr.status === GameCardStatus.MATCHED) return
    // 카드 뒤집는 상태로 업데이트
    updateStatus([curr], GameCardStatus.FACE_UP)

    // 짝맞는 상황은 아니고 그냥 한쪽만 업데이트
    if (!prev || prevIndex.current === currIndex) {
      //console.log('짝 안 맞음')
      prevIndex.current = currIndex
      return
    }

    // 짝이 맞는 경우
    // 5. If card symbols match
    if (curr.symbol === prev.symbol) {
      //console.log('짝 맞음')
      updateStatus([curr, prev], GameCardStatus.MATCHED)
      dispatch({
        type: playStateAction.OBTAIN_CARD,
        payload: { card: curr, status: GameStatus.MATCHED },
      })
    }

    // 짝이 안 맞는 경우
    else {
      disabled.current = true
      setTimeout(() => {
        updateStatus([curr, prev], GameCardStatus.FACE_DOWN)
        disabled.current = false
      }, 2000)
    }

    // 인덱스 초기화
    prevIndex.current = -1
  }

  return {
    cards,
    playState,
    handleClick,
  }
}

export default usePlayCards
