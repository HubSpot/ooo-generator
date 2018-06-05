import React from 'react';
import styled from 'styled-components';
import Page from './page';

const Header = styled.h1`
  font-family: peace_sansregular;
  font-size: 48px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

export default class Intro extends React.Component {
  render() {
    return (
      <Page>
        <Header>
          You’re Ready For Vacation.<br />But Is Your Inbox?
        </Header>
        <p>
          Whether you're going on a tropical trip or signing off for a
          staycation, you have to write an out of office message. So, why not
          write a good one? Saying you have "limited access to Wifi" isn't
          fooling anyone. It's 2018, after all.
        </p>
        <p>
          Share quick details about your time away and the generator will give
          you an 'OOO' email that's as fun as your vacation. (Well, almost.)
        </p>
      </Page>
    );
  }
}
