/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['newsapi.org'], // Add the domain of your image's URL here
  },
}

export default nextConfig;
