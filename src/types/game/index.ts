export const GameCardStatus = {
  FACE_DOWN: 'FACE_DOWN',
  FACE_UP: 'FACE_UP',
  MATCHED: 'MATCHED',
} as const
export type GameCardStatusKey =
  (typeof GameCardStatus)[keyof typeof GameCardStatus]

export const playStateAction = {
  INCREASE_CLICKED: 'INCREASE_CLICKED',
  OBTAIN_CARD: 'OBTAIN_CARD',
  CHANGE_USER_STATUS: 'CHANGE_USER_STATUS',
} as const
export type playStateActionKey =
  (typeof playStateAction)[keyof typeof playStateAction]

export const GameStatus = {
  START: 'START',
  CLEAR: 'CLEAR',
  RESULT: 'RESULT',
  MATCHED: 'MATCHED',
  CHOOSING: 'CHOOSING',
}
export type GameStatusKey = (typeof GameStatus)[keyof typeof GameStatus]

export type GameCardProps = {
  symbol: string
  status: GameCardStatusKey
}
export type GameCardsProps = GameCardProps[] | []

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
  type: GameStatusKey
  content?: playStateProps
}
export interface playStateProps {
  currentMatched: GameCardProps | null
  obtained: GameCardsProps
  clicked: number
  userStatus: GameStatusKey
  time: TimeStateProps
}

export type playStateActionProps =
  | { type: 'INCREASE_CLICKED' }
  | {
      type: 'OBTAIN_CARD'
      payload: { card: GameCardProps; status: GameStatusKey }
    }
  | {
      type: 'CHANGE_USER_STATUS'
      payload: { status: GameStatusKey }
    }
