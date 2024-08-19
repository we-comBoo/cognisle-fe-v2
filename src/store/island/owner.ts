import { OwnerStoreProps } from '@/types/island/owner'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialState = {
  name: '', // 가장 최대값,
  email: '',
}
export const OwnerStore = create<OwnerStoreProps>()(
  devtools((set) => ({
    owner: initialState,

    actions: {
      //전달 받은 z-index 값으로 상태 설정
      setOwner: (owner) => set(() => ({ ...owner })),
      // 현재 z-index 값에서 +1 진행
      resetOwner: () => set(() => ({ owner: { name: '', email: '' } })),
      setName: (name) => set((state) => ({ owner: { ...state.owner, name } })),
      setEmail: (email) =>
        set((state) => ({ owner: { ...state.owner, email } })),
    },
  })),
)

const useOwner = () => OwnerStore((state) => state.owner)
const useOnwerActions = () => OwnerStore((state) => state.actions)
export { useOwner, useOnwerActions }
