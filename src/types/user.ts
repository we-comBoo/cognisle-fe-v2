export interface User {
  email: string
  refresh: string
  access: string
  name: string
  pk: string
  // dsId: string
  // dsName: string
}

export interface LoginInfoProps extends User {
  expires: string
}
export interface AuthStoreProps extends AuthInfoProps {
  actions: AuthActionsProps
}

export interface AuthInfoProps {
  loginInfo: LoginInfoProps
}

export interface AuthActionsProps {
  signOut: () => void
  signIn: (state: LoginInfoProps) => void
  setAccess: (state: LoginInfoProps['access']) => void
  setRefresh: (state: LoginInfoProps['refresh']) => void
  setExpires: (state: LoginInfoProps['expires']) => void
}
