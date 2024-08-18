import { items } from '@/constants/island'

import { ItemProps, ItemsStoreProps } from '@/types/island'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

function updateLocation(list: ItemProps[], item: ItemProps) {
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

function removeLocation(list: ItemProps[], item_no: ItemProps['no']) {
  console.log('updateList', list, item_no)
  for (const t of list) {
    if (t.no === item_no) {
      const newLocation = { ...t.locations, show: false }
      console.log('new location', newLocation)
      t.locations = newLocation
    }
  }
  return list
}

function addLocation(list: ItemProps[], item_no: ItemProps['no']) {
  console.log('updateList', list, item_no)
  for (const t of list) {
    if (t.no === item_no) {
      const newLocation = { ...t.locations, show: true }
      console.log('new location', newLocation)
      t.locations = newLocation
    }
  }
  return list
}

const initial: ItemProps[] = items

export const ItemsStore = create<ItemsStoreProps>()(
  devtools((set) => ({
    items: [],
    actions: {
      addItem: (item_no) =>
        set((prev) => ({ items: [...addLocation(prev.items, item_no)] })),

      removeItem: (item_no) =>
        set((prev) => ({ items: [...removeLocation(prev.items, item_no)] })),

      updateItem: (newItem) =>
        set((prev) => ({
          items: [...updateLocation(prev.items, newItem)],
        })),
      batchUpdateItem: (item) => set((prev) => ({ items: [...item] })),
    },
  })),
)

const useItemsStore = () => ItemsStore((state) => state.items)
const useItemsActions = () => ItemsStore((state) => state.actions)
export { useItemsStore, useItemsActions }
