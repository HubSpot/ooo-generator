import React from 'react';

import Page from '../page';
import { H3 } from '../style/headers';
import Spinner from 'react-spinner';

const LoadingPage = () => {
  return (
    <Page align="center" plain={false}>
      <H3 color="whiteish" mb={4}>
        Please wait while we generate<br />your vacation-worthy OOO message
      </H3>
      <Spinner />
    </Page>
  );
};

export default LoadingPage;
