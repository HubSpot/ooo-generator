import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import Button from '@material-ui/core/Button';

import Page from '../page';

const Header = styled.h1`
  font-family: peace_sansregular;
  font-size: 64px;
  font-weight: normal;
  color: rgb(236, 171, 164);
  text-transform: uppercase;
  margin-bottom: 25px;
`;

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: 'rgb(236, 171, 164)',
//       dark: 'rgb(236, 171, 164)',
//     },
//     text: {
//       primary: 'rgb(236, 171, 164)',
//     },
//   },
// });

export default class Form extends React.Component {
  state = {
    startDate: null,
    endDate: null,
  };

  render() {
    return (
      <Page align="default">
        <Header>Your OOO Messages</Header>
        <p>
          Pick the out of office message that will make your contacts smile.
          Copy it to your clipboard and paste it into your email settings. Then
          get out of here. It's vacation time!
        </p>
        <form>
          <Flex justify="center">
            <Box px={3} pt={4} width={1 / 3}>
              <Button
                style={{ width: '100%' }}
                required
                label="First name"
                id="first"
                name="first"
              />
            </Box>
            <Box px={3} pt={4} width={1 / 3}>
              <Button
                style={{ width: '100%' }}
                required
                label="Last name"
                id="last"
                name="last"
              />
            </Box>
          </Flex>
        </form>
      </Page>
    );
  }
}
