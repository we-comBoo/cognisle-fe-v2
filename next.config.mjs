/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  skipMiddlewareUrlNormalize: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
}

export default nextConfig
