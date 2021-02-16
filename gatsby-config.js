module.exports = {
  siteMetadata: {
    title: `tt-gatsby`,
    description: `gatsby`,
    author: `@ASA-GH`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `b63emsip907i`,
        accessToken: `93k1PHfX5C3f9TvCIQlzOf-hIfR5k90H1A02XlNWb4Q`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/components/typography`,
        omitGoogleFont: true
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        lang: `en`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,

  ],
}