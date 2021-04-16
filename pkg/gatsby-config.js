const path = require("path");

module.exports = ({ basePath, fragmentsDir, wp, postCss = {} } = {}) => {
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-fragments`,
        options: {
          fragmentsDir,
        },
      },

      `gatsby-plugin-emotion`,

      {
        resolve: `gatsby-plugin-postcss`,
        options: postCss,
      },

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
