import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Heading } from 'rebass';
import Button from '@material-ui/core/Button';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(236, 171, 164)',
      dark: 'rgb(236, 171, 164)',
      contrastText: "rgba(255, 255, 255, 0.87)"
    },
  },
  typography: {
    fontSize: 18,
    button: {
      textTransform: "none",
    },
  },
});

const Blurb = styled.p`
  margin-top: 8px;
`;

export default ({ message, title }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Flex alignItems="center" mb={10}>
        <Box width={4 / 5}>
          <Heading fontSize={28} mt={3}>{title}</Heading>
          <Blurb>{message}</Blurb>
        </Box>
        <Box pl={4} width={1 / 5}>
          <Flex flexDirection="column">
            <Button disableRipple variant="contained" color="primary" size="large">Copy</Button>
          </Flex>
        </Box>
      </Flex>
    </MuiThemeProvider>
  );
};
