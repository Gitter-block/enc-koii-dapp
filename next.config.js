/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    }
    return config
  },
}

module.exports = nextConfig
