interface ZIndexStoreProps extends ZIndexStateProps {
  actions: ZIndexActionsProps
}

interface ZIndexStateProps {
  zIndex: number
}

interface ZIndexActionsProps {
  setZIndex: (state: ZIndexStateProps['zIndex']) => void
  increaseZIndex: () => void
}

interface ItemsStoreProps extends ItemsStateProps {
  actions: ItemsStateActions
}

interface ItemsStateActions {
  addItem: (item: ItemProps) => void
  removeItem: (id: ItemProps['id']) => void
  updateItem: (item: ItemProps) => void
}
interface ItemsStateProps {
  items: ItemProps[]
}

interface ItemProps {
  id: number
  x: number
  y: number
  z: number
  src: string
}

export type { ZIndexStoreProps, ItemsStoreProps, ItemProps, ItemsStateActions }
