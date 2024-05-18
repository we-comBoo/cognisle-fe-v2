interface IIsEdit extends IsEditState {
  actions: IsEditActions
}

interface IsEditState {
  isEdit: boolean
}

interface IsEditActions {
  setIsEdit: (state: boolean) => void
  setRead: () => void
  setEdit: () => void
}

export type { IIsEdit }
