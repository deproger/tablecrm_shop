/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost', 'tailwindui.com', 'app.tablecrm.com'], // Add the required domain here
  },
};

export default nextConfig;
