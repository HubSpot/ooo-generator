import React from 'react';
import IntroPage from '../components/screens/intro';
import FormPage from '../components/screens/form';
import LoadingPage from '../components/screens/loading';
import ChoicesPage from '../components/screens/choices';
import OutroPage from '../components/screens/outro';

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
