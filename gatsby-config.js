module.exports = {
  siteMetadata: {
    title: 'Out of Office Email Generator',
    desc: "Let's say goodbye to boring OOO emails.",
    keywords: 'OOO vacation voting email generator fun hubspot',
    tagline: "Let's say goodbye to boring OOO emails.",
    tracking: 'UA-122348985-1',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'templates',
        path: `${__dirname}/templates`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
};
