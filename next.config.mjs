import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  skipMiddlewareUrlNormalize: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com', 's3.amazonaws.com'],
  },
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === 'true', // 환경변수 ANALYZE가 true일 때 실행
  openAnalyzer: false, // 브라우저에 자동으로 분석결과를 새 탭으로 Open하는 것을 방지
})

export default bundleAnalyzer(nextConfig)
