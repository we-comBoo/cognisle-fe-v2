import { AuthInfoProps, AuthStoreProps } from '@/types/user'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialState: AuthInfoProps = {
  loginInfo: {
    email: '',
    // dsId: '',
    // dsName: '',
    name: '',
    access: '',
    refresh: '',
    expires: '',
    pk: '',
  },
}

export const AuthStore = create<AuthStoreProps>()(
  devtools((set) => ({
    loginInfo: initialState.loginInfo,
    actions: {
      signOut: () =>
        set(() => ({
          loginInfo: {
            email: '',
            // dsId: '',
            // dsName: '',
            pk: '',
            name: '',
            access: '',
            refresh: '',
            expires: '',
          },
        })),
      signIn: (loginInfo) => set(() => ({ loginInfo })),
      setAccess: () =>
        set((state) => ({
          loginInfo: { ...state.loginInfo, access: state.loginInfo.access },
        })),
      setRefresh: () =>
        set((state) => ({
          loginInfo: { ...state.loginInfo, refresh: state.loginInfo.refresh },
        })),
      setExpires: () =>
        set((state) => ({
          loginInfo: { ...state.loginInfo, refresh: state.loginInfo.expires },
        })),
    },
  })),
)

const useAuthStore = () => AuthStore((state) => state.loginInfo)
const useAuthActions = () => AuthStore((state) => state.actions)
export { useAuthStore, useAuthActions }
