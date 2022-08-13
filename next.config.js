/* @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disabled: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
        handler: "cacheFirst",
        options: {
          cacheName: "google-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
        },
      },
    ],
  },
});

/** @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
*/
