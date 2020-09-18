module.exports = {
  siteMetadata: {
    title: "travellroads",
    description: "Explore awesome tours & what makes each of them unique.",
    author: "@don_koce",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
