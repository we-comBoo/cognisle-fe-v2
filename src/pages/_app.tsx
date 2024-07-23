import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import globalStyles from '@/styles/globalStyles'
import 'public/fonts/style.css'

import { Layout } from '@/components/common'

const client = new QueryClient({})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={client}>
        <Layout>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </SessionProvider>
  )
}
