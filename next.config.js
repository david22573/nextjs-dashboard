/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.redgifs.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

module.exports = nextConfig;
