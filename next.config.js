/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Criterio de URL fijado antes de publicar: sin barra final. Debe coincidir
  // con los canonical que emite lib/seo.ts para no generar duplicados.
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
