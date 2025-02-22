/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all domains
      },
      {
        protocol: "http",
        hostname: "**", // Allow all domains (if needed)
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/counter",
        destination: "http://65.0.207.184:4001/api/counter",
      },
    ];
  },
};

module.exports = nextConfig;
