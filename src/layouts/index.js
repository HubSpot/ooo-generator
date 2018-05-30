import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import '../styles/index.css';

const Main = styled.main`
  margin: auto;
  max-width: 960px;
  text-align: center;
`;

const Shell = styled.main`
  background-color: rgb(236, 171, 164);
  color: #fff;
  display: flex;
  margin: 0;
  min-height: 100vh;
`;

const Layout = ({ children, data }) => (
  <Shell>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.desc },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Main>{children()}</Main>
  </Shell>
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
