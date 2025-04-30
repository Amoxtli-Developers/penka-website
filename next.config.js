/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    // Configurar el tamaño máximo de las imágenes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configuración experimental
  experimental: {
    // Habilitar las nuevas características de React si es necesario
  },
  // Configuración para manejo de fuentes
  optimizeFonts: true,
}

module.exports = nextConfig
