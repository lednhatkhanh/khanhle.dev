module.exports = {
  siteMetadata: {
    title: `khanhle.dev`,
    description: `My personal blog`,
    author: `@lednhatkhanh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `khanhle.dev`,
        short_name: `khanhle.dev`,
        start_url: `/`,
        background_color: `#0074d9`,
        theme_color: `#0074d9`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '~components': './components',
          '~models': './models',
          '~templates': './templates',
          static: {
            root: './public', // <- will used as this alias' root dir
            alias: './static', // <- will become ./public/static
          },
        },
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
