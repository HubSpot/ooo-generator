import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import Page from '../page';
import logo from '../../images/hubspotlogo-web-white.png';

const Header = styled.h1`
  font-family: peace_sansregular;
  font-size: 72px;
  font-weight: normal;
  line-height: 1.3;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const Tagline = styled.h3`
  font-family: Comfortaa;
  font-size: 22px;
`;

const IntroPage = ({ title, tagline }) => {
  return (
    <Page plain={false} align="center">
      <Flex style={{textAlign: 'left'}}>
        <Box width={1/5}>{' '}</Box>
        <Box width={4/5}>
          <Header>There’s Lots to Love About Vacation.</Header>
          <Tagline>
            Time off from work helps us recharge.<br />
            Whether you relax on the beach, hike a mountain, or spend time with family, taking a (guilt-free) vacation makes you better and happier at the office.</Tagline>
          <Tagline>That's why HubSpot's a big fan of flexibility. Our unlimited vacation policy (and its OOO messages) is just one way we try to create a flexible, inclusive culture.</Tagline>
          <img width="250" src={logo} />
        </Box>
      </Flex>
    </Page>
  );
};

export default IntroPage;
