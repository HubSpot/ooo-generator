import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import smoothscroll from 'smoothscroll-polyfill';

import '../styles/index.css';

const GA_TRACKING_ID = 'UA-122348985-1';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.func,
    data: PropTypes.object,
  };

  componentDidMount() {
    smoothscroll.polyfill();
  }

  render() {
    const { children, data } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.desc },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'viewport', content: 'width=device-width' },
            { name: 'og:title', content: 'Out of Office Email Generator' },
            {
              name: 'og:description',
              content: 'Because taking vacation should be fun.',
            },
            { name: 'og:image', content: '/og.png' },
          ]}
        >
          <link rel="shortcut icon" href="/favicon.ico" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `}
          </script>
        </Helmet>
        <main>{children()}</main>
      </div>
    );
  }
}

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
