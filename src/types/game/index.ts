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
