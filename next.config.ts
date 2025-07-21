import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
    images: {
      remotePatterns: [{
        protocol: "https",
        hostname: "**.vkcs.cloud",
        port: ""
      }]
    },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
    )

    return config
  },
};

export default nextConfig;
