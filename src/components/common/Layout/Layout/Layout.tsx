import Head from 'next/head'

import { SEO } from '@/components/common/Layout'
import Header from '@/components/common/Header'
import BottomMenu from '@/components/common/BottomMenu'
import { useRouter } from 'next/router'
import { WITHOUT_Tabbar } from '@/constants/route'
import St from './style'
interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const { pathname } = useRouter()
  return (
    <>
      <SEO title="Cognisle" description="지혜의 숲" image="" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <St.Root>
        {' '}
        {!WITHOUT_Tabbar.includes(pathname) && <Header />}
        {children}
        {!WITHOUT_Tabbar.includes(pathname) && <BottomMenu />}
      </St.Root>
    </>
  )
}

export default Layout
