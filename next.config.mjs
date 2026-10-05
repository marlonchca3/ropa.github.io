/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production"
const repoName = "ropa.github.io"

const nextConfig = {
  output: "export",
  basePath: isProduction ? `/${repoName}` : "",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
