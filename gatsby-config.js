let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
require("dotenv").config({ path: `.env.${activeEnv}` });

module.exports = {
  siteMetadata: {
    title: "Pattern Library",
    siteUrl: "https://patternslibrary.gatsbyjs.io"
  },
  plugins: [
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/fr/compte/*`,`/fr/editor/*`, `/admin/*`, `/fr/contribution/*`] },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `DM Sans\:300,400,400,700`,
          `source sans pro\:300,400,400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        host: process.env.CONTENTFUL_HOST,
        localeFilter: locale => locale.code === 'fr' // Limite only to fr node for the moment
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "123",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/Images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/Images/",
      },
      __key: "images",
    },
  ],
};
