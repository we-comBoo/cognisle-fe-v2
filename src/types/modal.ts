interface ModalStoreProps extends ModalStateProps {
  actions: ModalActionsProps
}

interface ModalStateProps {
  isOpen: boolean
}

interface ModalActionsProps {
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

export type { ModalStoreProps, ModalStateProps, ModalActionsProps }
