import { Props } from '@/types/react'
import { ComponentType, ReactNode, Suspense } from 'react'

interface suspenseProps {
  WrappedComponent: ComponentType<Props>
  options: { fallback: ReactNode }
}

const withSuspense = ({ WrappedComponent, options }: suspenseProps) => {
  return function SuspendedComponent(props: Props) {
    return (
      <Suspense fallback={options.fallback}>
        <WrappedComponent {...(props as any)} />
      </Suspense>
    )
  }
}

export default withSuspense
