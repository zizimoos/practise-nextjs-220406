/** @type {import('next').NextConfig} */
const API_KEY = "c39f66305cb6bd411613ca999ce32f56";
// const API_KEY = process.env.API_KEY;
console.log(API_KEY);
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/movies/api",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
