/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  skipMiddlewareUrlNormalize: true,
  images: {
    domains: ['i.ibb.co', 'localhost'],
  },
}

export default nextConfig
