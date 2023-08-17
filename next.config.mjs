import "./environment.mjs";
import million from "million/compiler";

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

export default million.next(nextConfig, { millionConfig });
