/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    newNextLinkBehavior: false,
  },
  swcMinify: true,

  // Ajout de la configuration pour les images
  images: {
    domains: ['www.wp.michaelmudcatward.com'],
  },
};

export default nextConfig;
