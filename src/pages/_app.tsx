import type { AppProps } from 'next/app'

import { Global } from '@emotion/react'
import { SessionProvider } from 'next-auth/react'

import ReactQueryProviders from '@/lib/ReactQuery/providers'
import globalStyles from '@/styles/globalStyles'
import 'public/fonts/style.css'

import { Layout } from '@/components/common'

export default function App({
  Component,
  pageProps: { session, dehydratedState, ...pageProps },
}: AppProps) {
  return (
    <ReactQueryProviders dehydratedState={dehydratedState}>
      <SessionProvider session={session}>
        <Layout>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ReactQueryProviders>
  )
}
