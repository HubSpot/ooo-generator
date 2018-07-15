import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getViewportHeight } from '../../lib/window';
import { H1, H4 } from '../style/headers';
import Page from '../page';
import Affordance from '../affordance';

const Tagline = styled(H4)`
  letter-spacing: 3px;
`;

const IntroPage = ({ title, tagline }) => {
  return (
    <Page align="center" plain={false}>
      <H1 mb={5} size="xxl">
        {title}
      </H1>
      <Tagline>{tagline}</Tagline>
      <Affordance scrollTo={getViewportHeight()} threshold={0} />
    </Page>
  );
};

IntroPage.propTypes = {
  title: PropTypes.node,
  tagline: PropTypes.node,
};

export default IntroPage;
