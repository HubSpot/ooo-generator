import React from 'react';
import styled from 'styled-components';

import { H1, H4 } from '../style/headers';
import Page from '../page';

const Tagline = styled(H4)`
  letter-spacing: 3px;
`;

const IntroPage = ({ title, tagline }) => {
  return (
    <Page align="center" plain={false}>
      <H1 mb={5}>{title}</H1>
      <Tagline>{tagline}</Tagline>
    </Page>
  );
};

export default IntroPage;
