/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    return [
      {
        source: "/dziekuje",
        destination: "/dziekujeangielski",
        permanent: true,
      },
    ]
  },
  images: {
    // Negotiate modern formats automatically; AVIF first, then WebP, then original.
    formats: ["image/avif", "image/webp"],
  },
}
export default nextConfig
