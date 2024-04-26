import { useSession } from 'next-auth/react'

// 인증 로딩 판별 중에는 컴포넌트가 랜더링 되지 않게

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { data, status } = useSession()
  if (status === 'loading') {
    return null
  } else {
    console.log('AuthGuard', data)
  }

  return <>{children}</>
}

export default AuthGuard
