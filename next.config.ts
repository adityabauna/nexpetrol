import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure webpack for SVGR (used when --webpack flag is used)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // Empty turbopack config to allow webpack config to coexist
  // When using --webpack flag, webpack config will be used
  turbopack: {},
};

export default nextConfig;
