import React from 'react';
import { Flex, Box } from 'rebass';

import Sharing from '../sharing';
import Page from '../page';
import { H2, H5 } from '../style/headers';
import logo from '../../images/hubspotlogo-web-white.png';

const OutroPage = () => {
  return (
    <Page maxWidth={1050} plain={false} align="center" textAlign="left">
      <Flex>
        <Box width={750} align="center">
          <H2 my={4}>There’s A Lot to Love About Vacation.</H2>
          <H5 my={4}>
            Time off from work helps us recharge.<br />
            Whether you relax on the beach, hike a mountain, or spend time with
            family, taking a (guilt-free) vacation makes you better and happier
            at the office.
          </H5>
          <H5 my={4}>
            That&apos;s why HubSpot&apos;s a big fan of flexibility. Our
            unlimited vacation policy (and its OOO messages) is just one way we
            try to create a flexible, inclusive culture. Learn more about
            working at HubSpot at{' '}
            <a
              style={{ color: 'white' }}
              href="https://hubspot.com/jobs"
              target="_blank"
              rel="noopener noreferrer"
            >
              hubspot.com/jobs
            </a>
          </H5>
          <img width="200" src={logo} />
          <Sharing />
        </Box>
      </Flex>
    </Page>
  );
};

export default OutroPage;
