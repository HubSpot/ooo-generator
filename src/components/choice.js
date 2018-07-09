import React from 'react';
import styled from 'styled-components';
import { Flex as _Flex, Box, Heading } from 'rebass';
import Button from '@material-ui/core/Button';

import { ChoiceStyles } from './style/themes';

const Blurb = styled.p`
  margin-top: 8px;
`;

const Flex = styled(_Flex)`
  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
`;

export default ({ message, title }) => {
  return (
    <ChoiceStyles>
      <Flex alignItems="center" mb={10}>
        <Box width={4 / 5}>
          <Heading fontSize={28} mt={3}>
            {title}
          </Heading>
          <Blurb>{message}</Blurb>
        </Box>
        <Box pl={4} width={1 / 5}>
          <Flex flexDirection="column">
            <Button
              disableRipple
              variant="contained"
              color="primary"
              size="large"
            >
              Copy
            </Button>
          </Flex>
        </Box>
      </Flex>
    </ChoiceStyles>
  );
};
