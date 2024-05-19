import { dataTemp } from '@/constants/islandItems'
import { ItemProps, ItemsStoreProps } from '@/types/island/item'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

function updateLst(list: ItemProps[], item: ItemProps) {
  for (const t of list) {
    if (t.id === item.id) {
      t.x = item.x
      t.y = item.y
      t.z = item.z
    }
  }

  return list
}

export const ItemsStore = create<ItemsStoreProps>()(
  devtools((set) => ({
    items: dataTemp,
    actions: {
      addItem: (item) => set((prev) => ({ items: [...prev.items, item] })),

      removeItem: (id) =>
        set((prev) => ({ items: prev.items.filter((e) => e.id !== id) })),

      updateItem: (newItem) =>
        set((prev) => ({
          items: [...updateLst(prev.items, newItem)],
        })),
    },
  })),
)

const useItems = () => ItemsStore((state) => state.items)
const useItemsActions = () => ItemsStore((state) => state.actions)
export { useItems, useItemsActions }
