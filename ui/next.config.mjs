import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/raw/:path*",
        destination: "/api/raw/:path*",
      },
    ];
  },
  transpilePackages: ["@trakteer"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(tsx|ts)$/,
      include: /public\/trakteer/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["next/babel"],
          },
        },
      ],
    });
    return config;
  },
};

export default withMDX(config);
