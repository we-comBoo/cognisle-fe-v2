interface IsEditStoreProps extends IsEditStateProps {
  actions: IsEditActionsProps
}

interface IsEditStateProps {
  isEdit: boolean
}

interface IsEditActionsProps {
  setIsEdit: (state: boolean) => void
  setRead: () => void
  setEdit: () => void
}

export type { IsEditStoreProps }
