/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://wikied-api.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
