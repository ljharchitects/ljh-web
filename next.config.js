/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const withPlugins = require("next-compose-plugins")
const withTM = require("next-transpile-modules")(["three"])
module.exports = withPlugins([withTM], {
  reactStricMode: true
})
