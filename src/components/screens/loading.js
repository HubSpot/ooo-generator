import React from 'react';

import Page from '../page';
import { H3 } from '../style/headers';
import airplane from '../../images/plane-loading.gif';

const LoadingPage = () => {
  return (
    <Page align="center" plain={false}>
      <H3 color="blackish" mb={4}>
        Please wait while we generate<br />your vacation-worthy OOO message
      </H3>
      <img src={airplane} />
    </Page>
  );
};

export default LoadingPage;
