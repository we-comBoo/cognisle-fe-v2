import { LandStoreProps, LandStateProps } from '@/types/island'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialState: { land: LandStateProps } = {
  land: {
    type: 1,
    src: '',
  },
}

export const LandStore = create<LandStoreProps>()(
  devtools((set) => ({
    land: initialState.land,
    actions: {
      setLand: (land) => set(() => ({ land: { ...land } })),
    },
  })),
)

const useLandStore = () => LandStore((state) => state.land)
const useLandActions = () => LandStore((state) => state.actions)
export { useLandStore, useLandActions }
