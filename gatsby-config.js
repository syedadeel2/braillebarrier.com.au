module.exports = {
  siteMetadata: {
    title: `Braille@Barrier`,
    description: `Braille@Barrier manufacture all our braille and tactile signs in-house by employing the latest technologies. Our plant is equipped to cut and print custom shapes and standard plates for your requirements.`,
    author: ``,
    address: `15-19 Grey Gum Road, Taree, 2430`,
    ABN: `53 003 154 041`,
    phone: `(02) 6552 7200`,
    email: `sales@barriersigns.com.au`,
    siteUrl: `https://www.braillebarrier.com.au`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.braillebarrier.com.au`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwindcss`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#27aae1`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
