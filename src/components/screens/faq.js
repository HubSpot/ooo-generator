import React from 'react';
import Page from '../page';
import Sharing from '../sharing';
import logo from '../../images/logo.png';
import { H3 } from '../style/headers';
import { Description } from '../style/text';
import styled from 'styled-components';

const AlignedList = styled.ol`
  text-align: left;
  margin-left: 15%;
  margin-right: 15%;
`;

const FAQPage = () => {
  return (
    <Page maxWidth={1050} dark={false} align="center">
      <H3 role="heading" aria-level="3">
        What Does the Out of Office Email Generator do?
      </H3>

      <Description>
        The OOO Email Generator helps you to create an entertaining message to
        display when you are… out of the office! Bye bye standard copy: express
        your absence in style.
      </Description>

      <H3 role="heading" aria-level="3">
        How Does the OOO Generator work?
      </H3>

      <Description>
        In order to generate your personalized message, this tool uses
        information you are providing and inserts them into premade templates in
        the smartest way possible.
      </Description>

      <Description>The steps to create an out of office email are:</Description>
      <AlignedList>
        <li>
          Fill out details about your upcoming time away: name, dates,
          destination, activity, emergency contact and email address
        </li>

        <li>Choose a theme for your message</li>

        <li>Click on “Submit”</li>

        <li>
          Choose a message that you like and click “Copy” or select “Regenerate”
          to get new ones
        </li>

        <li>Paste it into your email settings</li>

        <li>Shine even when you are not at the office</li>
      </AlignedList>

      <H3 role="heading" aria-level="3">
        What Does OOO stand for?
      </H3>

      <Description>
        OOO is an abbreviation meaning Out of Office, commonly used in
        professional settings to specify that somebody is not available at the
        moment, usually because they are on holidays.
      </Description>
      <Sharing />
      <img width="160" src={logo} />
    </Page>
  );
};

export default FAQPage;
