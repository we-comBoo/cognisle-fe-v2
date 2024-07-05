export type GameStateKeyProps = 'start' | 'clear' | 'result'

export interface TimeStateProps {
  start: null | Date
  end: null | Date
}

export interface GameResultProps {
  time: TimeStateProps
  clicked: number
}
export interface StateModalProps {
  isOpen: boolean
  handleClose: () => void
  type: GameStateKeyProps
  result?: GameResultProps
}
