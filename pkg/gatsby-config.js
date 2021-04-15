const path = require("path");

const autoprefixer = require("autoprefixer");

module.exports = ({ basePath, fragmentsDir, wp } = {}) => {
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-fragments`,
        options: {
          fragmentsDir,
        },
      },

      {
        resolve: `gatsby-plugin-sass`,
        options: {
          postCssPlugins: [autoprefixer()],
          sassOptions: {
            precision: 6,
          },
        },
      },

      `gatsby-plugin-emotion`,

      `gatsby-plugin-react-helmet`,

      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.resolve(basePath, `./src/images`),
        },
      },

      `gatsby-transformer-sharp`,

      `gatsby-plugin-sharp`,

      {
        resolve: "gatsby-source-graphql",
        options: {
          typeName: "WP",
          fieldName: "wp",
          url: `${wp.url}/graphql`,
          refetchInterval: wp.refetchInterval,
        },
      },

      `gatsby-plugin-meta-redirect`,
    ],
  };
};
