/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
      return [
        {
          source: <api endpoint in used in the front end>,
          destination: <nodejs handler endpoint>,
        },
      ]
    },
  }
