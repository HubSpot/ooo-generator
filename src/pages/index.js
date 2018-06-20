import React from 'react';
import IntroPage from '../components/pages/intro';
import FormPage from '../components/pages/form';
import LoadingPage from '../components/pages/loading';
import ChoicesPage from '../components/pages/choices';
import OutroPage from '../components/pages/outro';

const IndexPage = ({ data }) => {
  const { site } = data;
  return (
    <div>
      <IntroPage
        tagline={site.siteMetadata.tagline}
        title={site.siteMetadata.title}
      />
      <FormPage />
      <LoadingPage />
      <ChoicesPage />
      <OutroPage />
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
