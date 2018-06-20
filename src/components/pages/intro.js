import React from 'react';
import styled from 'styled-components';
import Page from '../page';

const Header = styled.h1`
  font-family: peace_sansregular;
  font-size: 80px;
  font-weight: normal;
  line-height: 1.3;
  text-transform: uppercase;
  margin-bottom: 50px;
`;

const Tagline = styled.h3`
  font-family: Comfortaa;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const IntroPage = ({ title, tagline }) => {
  return (
    <Page align="center" plain={false}>
      <Header>{title}</Header>
      <Tagline>{tagline}</Tagline>
    </Page>
  );
};

export default IntroPage;
