module.exports = {
  siteMetadata: {
    title: 'Out of Office Email Generator',
    desc: 'Generate fun Out of Office Email messages.',
    keywords: 'OOO vacation email generator fun hubspot',
    tagline: 'Because taking vacation should be fun.',
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
