import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/index.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.desc },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <main>{children()}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        desc
        keywords
      }
    }
  }
`;
