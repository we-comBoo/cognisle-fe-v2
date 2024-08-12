import Head from 'next/head'
import styled from '@emotion/styled'
import { SEO } from '@/components/common/Layout'
import Header from '@/components/common/Header'
import BottomMenu from '@/components/common/BottomMenu'
import { useRouter } from 'next/router'
import { withOutTabbar } from '@/constants/routeUrl'

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

      <Container>
        {' '}
        {!withOutTabbar.includes(pathname) && <Header />}
        {children}
        {!withOutTabbar.includes(pathname) && <BottomMenu />}
      </Container>
    </>
  )
}

export default Layout

const Container = styled.div`
  width: 43rem;
  scrollbar-width: none;
  min-height: 100dvh;
  margin: auto;
  background-color: var(--color-yellow-100);
`
