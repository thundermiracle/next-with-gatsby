const BLOG_URL = "http://127.0.0.1:9000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/blog/",
        destination: `${BLOG_URL}/blog/`,
      },
      {
        source: "/blog/:slug*",
        destination: `${BLOG_URL}/blog/:slug*`,
      },
    ];
  },
};

module.exports = nextConfig;
