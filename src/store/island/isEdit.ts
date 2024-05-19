import { IsEditStoreProps } from '@/types/island/edit'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const IsEditStore = create<IsEditStoreProps>()(
  devtools((set) => ({
    isEdit: false,
    actions: {
      setIsEdit: () => set((state) => ({ isEdit: !state.isEdit })),
      setRead: () => set(() => ({ isEdit: false })),
      setEdit: () => set(() => ({ isEdit: true })),
    },
  })),
)

const useIsEdit = () => IsEditStore((state) => state.isEdit)
const useIsEditActions = () => IsEditStore((state) => state.actions)
export { useIsEdit, useIsEditActions }
