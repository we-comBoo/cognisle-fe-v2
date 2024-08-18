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
  addItem: (item_no: ItemProps['no']) => void
  removeItem: (item_no: ItemProps['no']) => void
  updateItem: (item: ItemProps) => void
  batchUpdateItem: (item: ItemProps[]) => void
}
interface ItemsStateProps {
  items: ItemProps[]
}

interface ItemProps {
  no: number
  item_image: string
  locations: {
    x: number
    y: number
    z: number
    show: boolean
  }
}

export type { ZIndexStoreProps, ItemsStoreProps, ItemProps, ItemsStateActions }
