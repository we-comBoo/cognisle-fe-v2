interface OwnerStoreProps extends OwnerStateProps {
  actions: IsEditActionsProps
}

interface OwnerStateProps {
  owner: OwnerProps
}

interface OwnerProps {
  name: string
  email: string
}

interface IsEditActionsProps {
  setOwner: (state: OwnerStateProps) => void
  resetOwner: () => void
  setName: (name: string) => void
  setEmail: (name: string) => void
}

export type { OwnerStoreProps }
