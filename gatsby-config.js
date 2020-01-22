module.exports = {
  siteMetadata: {
    title: `Braille@Barrier`,
    description: `We create custom braille and tactile signage!`,
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.braillebarrier.com.au`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-tailwindcss`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#fff`,
    //     theme_color: `#319795`,
    //     display: `minimal-ui`,
    //     icon: `src/images/logo.svg`, // This path is relative to the root of the site.
    //   },
    // },
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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
