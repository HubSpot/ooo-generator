import React from 'react';
import styled from 'styled-components';
import Page from '../page';

import airplane from '../../images/plane-loading.gif';

const Header = styled.h1`
  font-family: peace_sansregular;
  font-size: 40px;
  font-weight: normal;
  color: rgb(68, 68, 68);
  line-height: 1.3;
  text-transform: uppercase;
  margin-bottom: 50px;
`;

const IntroPage = () => {
  return (
    <Page align="center" plain={false}>
      <Header>Please wait while we generate<br />your vacation-worthy OOO message</Header>
      <img src={airplane} />
    </Page>
  );
};

export default IntroPage;
