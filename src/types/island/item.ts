interface IZIndex extends ZIndexState {
  actions: ZIndexActions
}

interface ZIndexState {
  zIndex: number
}

interface ZIndexActions {
  setZIndex: (state: ZIndexState['zIndex']) => void
  increaseZIndex: () => void
}

export type { IZIndex }
