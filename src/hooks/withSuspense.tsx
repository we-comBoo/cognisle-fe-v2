import { Props } from '@/types/react'
import { ComponentType, ReactNode, Suspense } from 'react'

const withSuspense = (
  WrappedComponent: ComponentType<Props>,
  options: { fallback: ReactNode },
) => {
  console.log('withSuspense', WrappedComponent)
  return function SuspendedComponent(props: Props) {
    return (
      <Suspense fallback={options.fallback}>
        <WrappedComponent {...(props as any)} />
      </Suspense>
    )
  }
}

export default withSuspense
