import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import Page from '../page';
import palm from '../../images/palmtree.png';
import logo from '../../images/hubspotlogo-web-white.png';

const Header = styled.h1`
  font-family: peace_sansregular;
  font-size: 72px;
  font-weight: normal;
  line-height: 1.3;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

const Tagline = styled.h3`
  font-family: Comfortaa;
  font-size: 22px;
  margin-bottom: 25px;
`;

const Palms = styled.div`
  opacity: 0.2;
  position: absolute;
  height: 300px;
  width: 300px;
  background-image: url(${palm});
  background-size: 300px auto;
`;

const IntroPage = ({ title, tagline }) => {
  return (
    <Page maxWidth={1050} plain={false} align="center" textAlign="left">
      <Flex>
        <Box width={300} style={{position: 'relative'}}><Palms /></Box>
        <Box width={750}>
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
