/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mongodb']
  },
  images: {
    domains: ['localhost'],
    unoptimized: false
  }
};

export default nextConfig;
