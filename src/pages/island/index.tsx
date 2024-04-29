import Skeleton from '@/components/common/Skeleton'
import withSuspense from '@/hooks/withSuspense'
import { ReactNode, Suspense, useState } from 'react'

export function IslandSkeleton() {
  console.log('skeleton')
  return (
    <div style={{ padding: 24 }}>
      <Skeleton width="100%" height={100} style={{ borderRadius: 8 }} />
    </div>
  )
}

const Island = () => {
  return <>island </>
}

export default withSuspense(Island, { fallback: <IslandSkeleton /> })