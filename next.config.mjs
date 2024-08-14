import withBundleAnalyzer from '@next/bundle-analyzer'
import nextPwa from 'next-pwa'

/** @type {import('next').NextConfig} */

const withPWA = nextPwa({
  dest: 'public',
  register: true,
})

const nextConfig = {
  reactStrictMode: false,
  /*skipMiddlewareUrlNormalize: true,*/
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['cdn-icons-png.flaticon.com', 's3.ap-northeast-2.amazonaws.com'],
    sizes: '430px',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200],
    minimumCacheTTL: 31536000,
  },
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === 'true', // 환경변수 ANALYZE가 true일 때 실행
  openAnalyzer: false, // 브라우저에 자동으로 분석결과를 새 탭으로 Open하는 것을 방지
})

export default withPWA({ ...nextConfig })
