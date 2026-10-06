/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production"
const repoName = "ropa.github.io"
const basePath = isProduction ? `/${repoName}` : ""

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
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
