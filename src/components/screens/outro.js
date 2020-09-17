import React from 'react';
import { Flex, Box } from 'rebass';

import logo from '../../images/logo.png';
import { H2, H5 } from '../style/headers';
import Sharing from '../sharing';
import Page from '../page';

const OutroPage = () => {
  return (
    <Page maxWidth={1050} dark={true} align="center" textAlign="left">
      <Flex>
        <Box width={750} align="center">
          <H2 my={4}>There’s A Lot to Love About Flexibility.</H2>
          <H5 my={4}>
            We all need time off from work. Maybe it’s to unplug on vacation,
            spend time with family, or to leave work early for personal reasons.
            Whatever the reason you’re OOO, you shouldn’t feel guilty. Time off
            is good for the soul.
          </H5>
          <H5 my={4}>
            That&apos;s why HubSpot&apos;s a big fan of flexibility. Our hybrid
            remote-office model and unlimited vacation policy are just a few
            ways we try to create a flexible, inclusive culture. Learn more
            about working at HubSpot at{' '}
            <a
              style={{ color: 'white' }}
              href="https://hubspot.com/careers"
              target="_blank"
              rel="noopener noreferrer"
            >
              hubspot.com/careers
            </a>
          </H5>
          <Sharing />
          <img width="160" src={logo} />
        </Box>
      </Flex>
    </Page>
  );
};

export default OutroPage;
