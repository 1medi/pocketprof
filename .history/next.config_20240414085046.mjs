/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['cdn-p.smehost.net'], // Add the domain of your image's URL here
  },
}

export default nextConfig;
