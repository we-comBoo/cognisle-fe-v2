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

interface TabMenuProps {
  id: number
  title: string
  value: string
}

export type { IsEditStoreProps, TabMenuProps }
