import Head from 'next/head'
import styled from '@emotion/styled'
import { Header, SEO } from '@/components/common'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <SEO title="Cognisle" description="지혜의 숲" image="" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {' '}
        <Header />
        {children}
        <Header />
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
