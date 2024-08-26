import { useState, ReactNode } from 'react'

import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
  type DehydratedState,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface ProvidersProps {
  children: ReactNode
  dehydratedState: DehydratedState
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client

      // staleTime 이내에서는 별도의 네트워크 요청 없이 캐싱된 데이터를 보여준다.
      // staleTime이 지났지만 gcTime 이내라면 백그라운드에서 네트워크 요청을 하되, 유저에게는 캐싱된 데이터를 보여준다.
      staleTime: 5 * 60 * 1000, // 1분
      gcTime: 3 * 5 * 1000, // 5분, default >> 5분 (cacheTime임)
    },
  },
})

export default function Providers({
  children,
  dehydratedState,
}: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
