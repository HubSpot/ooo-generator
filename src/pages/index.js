import React from 'react';
import styled from 'styled-components';
import IntroPage from '../components/pages/intro';
import FormPage from '../components/pages/form';

const IndexPage = ({ data }) => {
  const { site } = data;
  return (
    <div>
      <IntroPage
        tagline={site.siteMetadata.tagline}
        title={site.siteMetadata.title}
      />
      <FormPage />
    </div>
  );
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
