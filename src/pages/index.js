import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import IntroPage from '../components/screens/intro';
import OutroPage from '../components/screens/outro';
import GeneratorPage from '../components/screens/generator';

const extractSiteMetadata = ({ site: { siteMetadata } }) => siteMetadata;

const Wrapper = styled.div`
  position: relative;
`;

const IndexPage = ({ data }) => {
  const { title, tagline } = extractSiteMetadata(data);

  return (
    <Layout>
      <Wrapper>
        <IntroPage tagline={tagline} title={title} />
        <GeneratorPage data={data} />
        <OutroPage />
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
        }
      }
    }
  }
`;
