import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" as="image" href="/assets/logo/primary.svg" />
        <link rel="preload" as="image" href="/assets/logo/secondary.svg" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <div id="modal-root" />
        <NextScript />
      </body>
    </Html>
  )
}
