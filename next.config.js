const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  
  pwa: {
    disabled: process.env.NODE_ENV === "development",
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
