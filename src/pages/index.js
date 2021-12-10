import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import IntroPage from '../components/screens/intro';
import OutroPage from '../components/screens/outro';
import GeneratorPage from '../components/screens/generator';
import FAQPage from '../components/screens/faq';

const Wrapper = styled.div`
  position: relative;
`;

const IndexPage = ({ data }) => {
  const {
    site: {
      siteMetadata: { title, tagline },
    },
  } = data;

  return (
    <Layout>
      <Wrapper>
        <IntroPage title={title} tagline={tagline} />
        <GeneratorPage data={data} />
        <OutroPage />
        <FAQPage />
      </Wrapper>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        tagline
      }
    }
    allMarkdownRemark {
      edges {
        node {
          rawMarkdownBody
          frontmatter {
            theme
          }
        }
      }
    }
  }
`;
