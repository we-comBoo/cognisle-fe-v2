import {
  GameCardStatus,
  GameResultProps,
  GameStatus,
  GameStatusKey,
} from '@/types/game'

export const symbols = Array.from({ length: 24 }, (_, index) => index + 1)

//selecting random index without same element
const selectIndex = (totalIndex: number, selectingNumber: number) => {
  let randomIndexArray = []
  for (let i = 0; i < selectingNumber; i++) {
    //check if there is any duplicate index
    const randomNum = Math.floor(Math.random() * totalIndex)
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum)
    } else {
      //if the randomNum is already in the array retry
      i--
    }
  }
  return randomIndexArray
}
export function shuffle() {
  const pickedIndex = selectIndex(symbols.length, 8)
  // console.log(pickedIndex)
  const picked = pickedIndex.map((index) => symbols[index])
  const cards = [...picked, ...picked]
    .sort(() => Math.random() - 0.5)
    .map((number) => ({ number, status: GameCardStatus.FACE_DOWN }))

  return cards
}

export function getDuration(time: GameResultProps['time']) {
  const { start, end } = time
  if (end && start) {
    const duration = (end.getTime() - start.getTime()) / 1000 // 밀리초 -> 초
    const MMSS = {
      second: Math.ceil(duration % 60),
      minute: Math.floor(duration / 60),
    }
    return MMSS
  }
}

export function closeTime(type: GameStatusKey) {
  if (type === GameStatus.RESULT) {
    return 1000000000
  } else if (type === GameStatus.CLEAR) {
    return 4000
  } else {
    return 3000
  }
}
