/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    // Negotiate modern formats automatically; AVIF first, then WebP, then original.
    formats: ["image/avif", "image/webp"],
  },
}
export default nextConfig
