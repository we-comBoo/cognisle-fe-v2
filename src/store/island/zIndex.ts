import { ZIndexStoreProps } from '@/types/island/item'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const ZIndexStore = create<ZIndexStoreProps>()(
  devtools((set) => ({
    zIndex: 2147483647, // 가장 최대값,
    actions: {
      //전달 받은 z-index 값으로 상태 설정
      setZIndex: (zIndex) => set(() => ({ zIndex: zIndex })),
      // 현재 z-index 값에서 +1 진행
      increaseZIndex: () => set((state) => ({ zIndex: state.zIndex + 1 })),
    },
  })),
)

const useZIndex = () => ZIndexStore((state) => state.zIndex)
const useZIndexActions = () => ZIndexStore((state) => state.actions)
export { useZIndex, useZIndexActions }
