/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://external-study-app.onrender.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
