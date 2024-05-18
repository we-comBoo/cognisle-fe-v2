import { dataTemp } from '@/constants/islandItems'
import { ItemsStoreProps } from '@/types/island/item'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const ItemsStore = create<ItemsStoreProps>()(
  devtools((set) => ({
    items: dataTemp,
    actions: {
      addItem: (item) => set((prev) => ({ items: [...prev.items, item] })),

      removeItem: (id) =>
        set((prev) => ({ items: prev.items.filter((e) => e.id !== id) })),

      updateItem: (item) =>
        set((prev) => ({
          items: [...prev.items.filter((e) => e.id !== item.id), item],
        })),
    },
  })),
)

const useItems = () => ItemsStore((state) => state.items)
const useItemsActions = () => ItemsStore((state) => state.actions)
export { useItems, useItemsActions }
