/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mongodb'],
  images: {
    domains: ['localhost'],
    unoptimized: false
  }
};

export default nextConfig;
