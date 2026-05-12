/** @type {import('next').NextConfig} */
const nextConfig = {

  // الصور (Images) — من وين يسمح يجيب صور خارجية
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",  // صور Unsplash المؤقتة
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",        // صور المدارس من قاعدة البيانات
      },
    ],
  },

};

module.exports = nextConfig;
