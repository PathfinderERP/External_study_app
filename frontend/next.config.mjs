/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // Only proxy to Render when an external API URL is configured.
    // Locally, Nginx handles /api/* routing to the Docker backend.
    if (!apiUrl || apiUrl.startsWith("http://localhost")) {
      return [];
    }

    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
