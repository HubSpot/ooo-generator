import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../../images/logo.png';
import { getViewportHeight } from '../../lib/window';
import { H1, H4 } from '../style/headers';
import Page from '../page';
import Affordance from '../affordance';

const Logo = styled.img`
  width: 180px;
  margin-bottom: 16px;
`;

const Tagline = styled(H4)`
  letter-spacing: 2px;
`;

const IntroPage = ({ title, tagline }) => {
  return (
    <Page align="center" dark={true}>
      <Logo src={logo} />
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
