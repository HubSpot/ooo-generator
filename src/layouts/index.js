import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import '../styles/index.css';

import { ThemeProvider } from 'styled-components';
import createTheme from 'styled-theming';

const backgroundColor = createTheme('mode', {
  informative: 'rgb(236, 171, 164)',
  interactive: 'rgb(255, 255, 255)',
});

const textColor = createTheme('mode', {
  informative: 'rgb(255, 255, 255)',
  interactive: 'rgb(68, 68, 68)',
});

const Main = styled.main`
  margin: auto;
  max-width: 960px;
  text-align: center;
`;

const Shell = styled.main`
  background-color: ${backgroundColor};
  color: ${textColor};
  display: flex;
  margin: 0;
  min-height: 100vh;
`;

const Layout = ({ children, data, theme }) => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func,
  theme: PropTypes.object,
};

Layout.defaultProps = {
  theme: {
    mode: 'informative',
  },
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
