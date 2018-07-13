import React from 'react';
import PropTypes from 'prop-types';

import Page from '../page';
import { H3 } from '../style/headers';
import Spinner from 'react-spinner';

const LoadingPage = ({ timeout, onNextStep }) => {
  setTimeout(onNextStep, timeout);
  return (
    <Page align="center" plain={false}>
      <H3 color="whiteish" mb={4}>
        Please wait while we generate<br />your vacation-worthy OOO message
      </H3>
      <Spinner />
    </Page>
  );
};

LoadingPage.propTypes = {
  timeout: PropTypes.number,
  onNextStep: PropTypes.func,
};

export default LoadingPage;
