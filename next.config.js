/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_DOMAIN],
  },
}
module.exports = nextConfig
