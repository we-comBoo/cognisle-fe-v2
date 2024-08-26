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
  addItem: (item_no: number) => void
  removeItem: (item_no: number) => void
  updateItem: (item: ItemInfoProps) => void
  batchUpdateItem: (item: ItemInfoProps[]) => void
}
interface ItemsStateProps {
  items: ItemProps
}

interface ItemProps {
  [key: number]: ItemInfoProps
}

interface ItemInfoProps {
  no?: number
  item_image: string
  locations: {
    x: number
    y: number
    z: number
    show: boolean
  }
}

export type {
  ZIndexStoreProps,
  ItemInfoProps,
  ItemsStoreProps,
  ItemProps,
  ItemsStateActions,
}
