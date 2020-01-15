module.exports = {
  siteMetadata: {
    title: "Badia.cc",
    authors: [
      {
        id: 1,
        name: "Raphaël Badia",
        twitter: "@raphaelbadia",
        description:
          "Raphaël est un consultant React, actuellement en mission chez Docavenue.",
      },
      {
        id: 2,
        name: "Brent",
        twitter: "@brendt_gd",
        description:
          "Writing at http://stitcher.io and http://criticast.io, building http://aggregate.stitcher.io, programming at @spatie_be, Christian",
      },
    ],
    author: "Raphaël Badia",
    description:
      "Blog personnel de <strong>{author}</strong>, consultant React en mission chez Docavenue. J'adore parler d'autoentreprenariat, de React et de MVP.",
    siteUrl: "https://badia.cc",
    social: {
      twitter: "@raphaelbadia",
    },
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷",
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-130227707-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Badia.cc`,
        short_name: `Badia.cc`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffa7c4`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "fr",
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-catch-links`,
  ],
}
