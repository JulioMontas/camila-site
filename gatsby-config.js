module.exports = {
  siteMetadata: {
      title: `Camila Villa Zertuche`,
      author: `Camila Villa Zertuche`,
    siteUrl: `https://camila.gatsbyjs.io/`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: ["gatsby-plugin-netlify", "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Camila Villa Zertuche`,
      short_name: `Camila`,
      start_url: `/work/painting`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/icon.png`, // This path is relative to the root of the site.
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
