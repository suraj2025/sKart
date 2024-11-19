/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.teez.in',
          pathname: '/cdn/shop/products/**',
        },
      ],
      domains: ['rukminim2.flixcart.com'],
    },
  };
  
  export default nextConfig;
  