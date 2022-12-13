/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Fastify`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: `/uk`,
  plugins: [
    {
      resolve: `gatsby-plugin-fastify`,
    }
  ],
}
