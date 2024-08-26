import { ItemProps, ItemsStoreProps, ItemInfoProps } from '@/types/island'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

function addLocation(items: ItemProps, item_no: number) {
  console.log('addList', items, item_no)
  const new_items_dic = { ...items }
  new_items_dic[item_no].locations.show = true
  return new_items_dic
}

function removeLocation(items: ItemProps, item_no: number) {
  console.log('removeLocation', items, item_no)
  const new_items_dic = { ...items }
  new_items_dic[item_no].locations.show = false
  return new_items_dic
}

function updateLocation(items: ItemProps, item_info: ItemInfoProps) {
  console.log('updateLocation', items, item_info)
  const new_items_dic = { ...items }
  const { no, item_image, locations } = item_info
  if (no) {
    new_items_dic[no] = { locations, item_image }
  }

  return new_items_dic
}

function batchLocation(items: ItemProps, new_items: ItemInfoProps[]) {
  const new_items_dic = { ...items }
  for (let item of new_items) {
    const { no, item_image, locations } = item
    if (no) {
      new_items_dic[no] = { item_image, locations }
    }
  }
  return new_items_dic
}

export const ItemsStore = create<ItemsStoreProps>()(
  devtools((set) => ({
    items: {},
    actions: {
      // 소유했지만 미사용에서 섬에 추가해 사용함
      addItem: (item_no) =>
        set((prev) => ({ items: addLocation(prev.items, item_no) })),

      // 제거
      removeItem: (item_no) =>
        set((prev) => ({ items: removeLocation(prev.items, item_no) })),

      // 위치 변경
      updateItem: (item_info) =>
        set((prev) => ({
          items: updateLocation(prev.items, item_info),
        })),
      batchUpdateItem: (new_items) =>
        set((prev) => ({ items: batchLocation(prev.items, new_items) })),
    },
  })),
)

const useItemsStore = () => ItemsStore((state) => state.items)
const useItemsActions = () => ItemsStore((state) => state.actions)
export { useItemsStore, useItemsActions }
