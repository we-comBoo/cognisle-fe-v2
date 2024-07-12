export enum GameCardStatusKey {
  FACE_DOWN = 'FACE_DOWN',
  FACE_UP = 'FACE_UP',
  MATCHED = 'MATCHED',
}

export enum playStateActionKey {
  INCREASE_CLICKED = 'INCREASE_CLICKED',
  OBTAIN_CARD = 'OBTAIN_CARD',
  CHANGE_USER_STATUS = 'CHANGE_USER_STATUS',
}

export type GameCardProps = {
  symbol: string
  status: GameCardStatusKey
}
export type GameCardsProps = GameCardProps[] | []

export enum GameStatusKey {
  START = 'START',
  CLEAR = 'CLEAR',
  RESULT = 'RESULT',
  MATCHED = 'MATCHED',
  CHOOSING = 'CHOOSING',
}
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
  | { type: playStateActionKey.INCREASE_CLICKED }
  | {
      type: playStateActionKey.OBTAIN_CARD
      payload: { card: GameCardProps; status: GameStatusKey }
    }
  | {
      type: playStateActionKey.CHANGE_USER_STATUS
      payload: { status: GameStatusKey }
    }
