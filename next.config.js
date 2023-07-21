/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    PLATFORM_NAME: process.env.PLATFORM_NAME,
    BRAND_NAME: process.env.BRAND_NAME,
  },
};
