import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import globalStyles from '@/styles/globalStyles'
import 'public/fonts/style.css'
import Layout from '@/components/common/Layout'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'inspector'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  )
}
