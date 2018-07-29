import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Page from '../page';
import { H3 } from '../style/headers';
import Spinner from 'react-spinner';

const Fullscreen = styled(Page)`
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  width: 100vw;
`;

const LoadingPage = ({ timeout, onNextStep }) => {
  setTimeout(onNextStep, timeout);
  return (
    <Fullscreen align="center" plain={false}>
      <H3 color="whiteish" mb={4}>
        Please wait while we generate<br />your vacation-worthy OOO message
      </H3>
      <Spinner />
    </Fullscreen>
  );
};

LoadingPage.propTypes = {
  timeout: PropTypes.number,
  onNextStep: PropTypes.func,
};

export default LoadingPage;
