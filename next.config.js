/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  //swcMinify: true,
}

//module.exports = nextConfig

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],  // Allow Cloudinary images
  },
};

