import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import globalStyles from '@/styles/globalStyles'
import 'public/fonts/style.css'

import AuthGuard from '@/components/auth/AuthGuard'
import Layout from '@/components/common/Layout'

const client = new QueryClient({})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <SessionProvider session={session}>
        <QueryClientProvider client={client}>
          <Global styles={globalStyles} />
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        </QueryClientProvider>
      </SessionProvider>
    </Layout>
  )
}
