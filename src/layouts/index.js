import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import smoothscroll from 'smoothscroll-polyfill';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/index.css';

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        desc
        keywords
        tagline
        tracking
      }
    }
  }
`;

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  componentDidMount() {
    smoothscroll.polyfill();
  }

  render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={query}
        render={({
          site: {
            siteMetadata: { title, desc, keywords, tagline, tracking },
          },
        }) => (
          <div>
            <Helmet
              title={title}
              meta={[
                {
                  name: 'description',
                  content: desc,
                },
                {
                  name: 'keywords',
                  content: keywords,
                },
                {
                  name: 'viewport',
                  content: 'width=device-width',
                },
                {
                  name: 'og:title',
                  content: title,
                },
                {
                  name: 'og:description',
                  content: tagline,
                },
                {
                  name: 'og:image',
                  content: '/og-image.png',
                },
              ]}
            >
              <link rel="shortcut icon" href="/favicon.ico" />
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${tracking}`}
              />
              <script>
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${tracking}');
                `}
              </script>
            </Helmet>
            <main>{children}</main>
          </div>
        )}
      />
    );
  }
}

export default Layout;
