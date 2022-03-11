/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    })
    return config
  },
  images: {
    domains: [
      "cdn-0.practicaltyping.com",
      "img-cdn.hltv.org",
      "avatars.githubusercontent.com",
      "imgs.search.brave.com",
    ],
  },
}
