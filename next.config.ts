/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... tus otras configuraciones
  images: {
    domains: ['github.com'], // acá lista los dominios permitidos
  },
};

module.exports = nextConfig;