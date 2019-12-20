const path = require('path');

module.exports = {
  plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-robots-txt`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'DeepPatel',
          short_name: 'DeepPatel',
          start_url: '/',
          background_color: '#020c1b',
          theme_color: '#0a192f',
          display: 'minimal-ui',
        },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@config': path.resolve(__dirname, 'src/config'),
          '@fonts': path.resolve(__dirname, 'src/fonts'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
        extensions: [
          "js",
        ],
      }
    }
    // your another plugins
  ]
};
