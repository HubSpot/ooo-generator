import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import smoothscroll from 'smoothscroll-polyfill';

import '../styles/index.css';

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
          ]}
        />
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
