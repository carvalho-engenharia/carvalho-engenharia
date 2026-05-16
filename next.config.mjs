/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["vm-7z23bx1a31ydeecu4zc271a4.vusercontent.net"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig