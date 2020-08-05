/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `erk673mftj6c`,
        accessToken: `Rmq7lF-9Xa9rqBT9QD1baG2uFzaFMj26Op-t4U8F92s`,
        /*host: `preview.contentful.com`,*/
      },
    },
  ],
}
