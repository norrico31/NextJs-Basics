/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false
      },
      {
        source: '/old-blog/:id',
        destination: '/new-blog/:id',
        permanent: false
      },
    ]
  }
}

//! COMPLEX PATH MATCHING REDIRECTS (NEXT.JS DOCS)

module.exports = nextConfig
