import { ComponentType } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Props } from '@/types/react'

const withAuth = (WrappedComponent: ComponentType<Props>) => {
  return function AuthenticatedComponent(props: Props) {
    const { data, status } = useSession()
    const router = useRouter()

    if (status === 'loading') {
      return null
    }
    if (data === null) {
      router.replace('/auth/login')
      return null
    }

    return <WrappedComponent {...(props as any)} />
  }
}

export default withAuth
