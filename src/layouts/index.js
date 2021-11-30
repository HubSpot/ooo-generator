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
              <script type="application/ld+json">
                {`{
                  "@context": "https://schema.org/",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What‌ ‌Does‌ ‌the‌ ‌Out‌ ‌of‌ ‌Office‌ ‌Email‌ ‌Generator‌ ‌do?‌ ‌",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The OOO Email Generator helps you to create an entertaining message to display when you are... out of the office! Bye bye standard copy: express your absence in style."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How‌ ‌Does‌ ‌the‌ ‌OOO‌ ‌Generator‌ ‌work?‌ ‌",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "<p>In order to generate your personalized message, this tool uses information you are providing and inserts them into premade templates in the smartest way possible.</p><p>The steps to create an out of office email are:</p><ol><li>Fill out details about your upcoming time away: name, dates, destination, activity, emergency contact and email address</li><li>Choose a theme for your message: either Voting, Holiday Season or Summertime</li><li>Click on &quot;Submit&quot;</li><li>Choose a message that you like and click &quot;Copy&quot; or select &quot;Regenerate&quot; to get new ones</li><li>Paste it into your email settings</li><li>Shine even when you are not at the office</li></ol>"
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What‌ ‌Does‌ ‌OOO‌ ‌stand‌ ‌for?‌ ‌",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "OOO is an abbreviation meaning Out of Office, commonly used in professional settings to specify that somebody is not available at the moment, usually because they are on holidays."
                      }
                    }
                  ]
                }`}
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
