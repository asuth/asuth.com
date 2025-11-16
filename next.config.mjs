import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  turbopack: {
    root: path.join(__dirname, '..'),
  },

  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  images: {
    imageSizes: [
      16, 32, 48, 64, 96, 128, 256, 384,
      // added sizes
      1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200,
      3400, 3600, 3800,
    ],
  },
  async redirects() {
    return [
      {
        source: '/30m',
        destination: 'https://calendly.com/asuth-9000/30-minutes',
        permanent: true,
      },
      {
        source: '/45m',
        destination: 'https://calendly.com/asuth-9000/45-minutes',
        permanent: true,
      },

      {
        source: '/60m',
        destination: 'https://calendly.com/asuth-9000/60-minutes',
        permanent: true,
      },
      {
        source: '/90m',
        destination: 'https://calendly.com/asuth-9000/90-minutes',
        permanent: true,
      },
      {
        source: '/zoom',
        destination: 'https://us06web.zoom.us/j/4384500729',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

