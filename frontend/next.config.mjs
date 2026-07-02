/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // Only proxy to Render when an external API URL is configured.
    // Locally, Nginx handles /api/* routing to the Docker backend (strips /api prefix).
    if (!apiUrl || apiUrl.startsWith("http://localhost")) {
      return [];
    }

    // Strip the /api prefix from the path, mirroring the Nginx rewrite:
    // rewrite ^/api/(.*)$ /$1
    // e.g. /api/auth/token → https://render.com/auth/token
    const baseUrl = apiUrl.replace(/\/api$/, "");
    return [
      {
        source: "/api/:path*",
        destination: `${baseUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
