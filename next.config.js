/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.sendbird.com', 'encrypted-tbn0.gstatic.com'],
  },
}

module.exports = nextConfig
