import { items } from '@/constants/island'

import { ItemProps, ItemsStoreProps } from '@/types/island'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

function updateList(list: ItemProps[], item: ItemProps) {
  console.log('updateList', list, item)
  for (const t of list) {
    if (t.no === item.no) {
      const newLocation = { ...item.locations }
      console.log('new location', newLocation)
      t.locations = newLocation
    }
  }

  return list
}
const initial: ItemProps[] = items

export const ItemsStore = create<ItemsStoreProps>()(
  devtools((set) => ({
    items: initial,
    actions: {
      addItem: (item) => set((prev) => ({ items: [...prev.items, item] })),

      removeItem: (no) =>
        set((prev) => ({ items: prev.items.filter((e) => e.no !== no) })),

      updateItem: (newItem) =>
        set((prev) => ({
          items: [...updateList(prev.items, newItem)],
        })),
      batchUpdateItem: (item) =>
        set((prev) => ({ items: [...prev.items, ...item] })),
    },
  })),
)

const useItemsStore = () => ItemsStore((state) => state.items)
const useItemsActions = () => ItemsStore((state) => state.actions)
export { useItemsStore, useItemsActions }
