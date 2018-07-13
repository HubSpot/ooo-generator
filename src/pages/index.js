import React from 'react';
import PropTypes from 'prop-types';
import IntroPage from '../components/screens/intro';
import OutroPage from '../components/screens/outro';
import styled from 'styled-components';
import GeneratorPage from '../components/screens/generator';

const extractSiteMetadata = ({ site: { siteMetadata } }) => siteMetadata;

const Wrapper = styled.div`
  position: relative;
`;

const IndexPage = ({ data }) => {
  const { title, tagline } = extractSiteMetadata(data);

  return (
    <Wrapper>
      <IntroPage tagline={tagline} title={title} />
      <GeneratorPage data={data} />
      <OutroPage />
    </Wrapper>
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
