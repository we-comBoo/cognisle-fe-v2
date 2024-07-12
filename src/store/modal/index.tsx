import { ModalStoreProps } from '@/types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const ModalStore = create<ModalStoreProps>()(
  devtools((set) => ({
    isOpen: false, // 가장 최대값,
    actions: {
      openModal: () => set(() => ({ isOpen: true })),

      closeModal: () => set(() => ({ isOpen: false })),
      toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
    },
  })),
)

const useModalStore = () => ModalStore((state) => state.isOpen)
const useModalActions = () => ModalStore((state) => state.actions)
export { useModalStore, useModalActions }
