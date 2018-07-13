import React from 'react';
import PropTypes from 'prop-types';
import IntroPage from '../components/screens/intro';
import FormPage from '../components/screens/form';
import LoadingPage from '../components/screens/loading';
import ChoicesPage from '../components/screens/choices';
import OutroPage from '../components/screens/outro';
import styled from 'styled-components';

const __metadata__ = {
  firstName: 'Bender',
  lastName: 'Rodriguez',
  startDate: 'January 1, 2018',
  returnDate: 'December 31, 2018',
  destination: 'Omicron Persei 8',
  activity: 'Build my own theme park',
  emergencyContactName: 'Flexo',
  emergencyContactEmail: '000-000-0000',
};

const extractSiteMetadata = ({ site: { siteMetadata } }) => siteMetadata;

const extractTemplates = ({ allMarkdownRemark: { edges } }) =>
  edges.map(({ node: { rawMarkdownBody } }) => rawMarkdownBody);

const Wrapper = styled.div`
  position: relative;
`;

const IndexPage = ({ data }) => {
  const { title, tagline } = extractSiteMetadata(data);
  const templates = extractTemplates(data);

  return (
    <Wrapper>
      <IntroPage tagline={tagline} title={title} />
      <FormPage />
      <LoadingPage />
      <ChoicesPage metadata={__metadata__} templates={templates} />
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
