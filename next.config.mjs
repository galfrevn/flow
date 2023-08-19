import "./environment.mjs";
import million from "million/compiler";
import pwa from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const millionConfig = {
  auto: { rsc: true },
};

const progressiveApp = pwa({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

export default progressiveApp(million.next(nextConfig, { millionConfig }));
