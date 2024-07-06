type GameItemsProps = [] | Number[]
type GameCardsProps =
  | {
      symbol: string
      status: string
    }[]
  | []
export interface GameBoardProps {
  items: GameItemsProps
  cards: GameCardsProps
}

export type GameStateKeyProps =
  | 'start'
  | 'clear'
  | 'result'
  | 'matched'
  | 'choosing'

export interface TimeStateProps {
  start: null | Date
  end: null | Date
}

export interface GameStateContentProps {
  currentMatched: string | number
  time: GameResultProps['time']
  clicked: GameResultProps['clicked']
  items: GameItemsProps
}

export interface GameResultProps {
  time: TimeStateProps
  clicked: number
}
export interface StateModalProps {
  isOpen: boolean
  handleClose: () => void
  type: GameStateKeyProps
  content?: GameStateContentProps
}
