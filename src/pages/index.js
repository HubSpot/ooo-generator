import React from 'react';
import PropTypes from 'prop-types';
import IntroPage from '../components/screens/intro';
import FormPage from '../components/screens/form';
import LoadingPage from '../components/screens/loading';
import ChoicesPage from '../components/screens/choices';
import OutroPage from '../components/screens/outro';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const IndexPage = ({ data }) => {
  const { site } = data;
  return (
    <Wrapper>
      <IntroPage
        tagline={site.siteMetadata.tagline}
        title={site.siteMetadata.title}
      />
      <FormPage />
      <LoadingPage />
      <ChoicesPage />
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
      id
      siteMetadata {
        title
        tagline
      }
    }
  }
`;
