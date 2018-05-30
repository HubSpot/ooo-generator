import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-family: peace_sansregular;
  font-size: 80px;
  font-weight: normal;
  line-height: 1.3;
  text-transform: uppercase;
  margin-bottom: 50px;
`;

const Tagline = styled.h3`
  font-family: Kollektif;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const IndexPage = ({ data }) => {
  const { site } = data;
  return (
    <div>
      <Header>{site.siteMetadata.title}</Header>
      <Tagline>{site.siteMetadata.tagline}</Tagline>
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
