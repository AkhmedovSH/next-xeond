/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    distDir: 'build',
    // assetPrefix: './',
    images: { unoptimized: true },
}

module.exports = nextConfig
