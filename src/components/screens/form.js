import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Box } from 'rebass';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { FormStyles } from '../style/themes';
import { H2 } from '../style/headers';
import Page from '../page';

const StyledButton = styled(Button)`
  margin-top: 20px !important;
  text-transform: uppercase;

  && span {
    font-family: 'Comfortaa';
    color: white;
  }
`;

const StyledTextField = styled(TextField)`
  input,
  label {
    font-family: 'Comfortaa';
  }
`;

export default class Form extends React.Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
  };

  render() {
    const { handleChange, onSubmit } = this.props;

    return (
      <Page align="center">
        <H2 mb={4}>
          You’re Ready For Vacation.<br />But Is Your Inbox?
        </H2>
        <p>
          {`Whether you're going on a tropical trip or signing off for a
          staycation, you have to write an out of office message. So, why not
          write a good one? Saying you have "limited access to Wifi" isn't
          fooling anyone. It's 2018, after all.`}
        </p>
        <p>
          {`Share quick details about your time away and the generator will give
          you an 'OOO' email that's as fun as your vacation. (Well, almost.)`}
        </p>
        <FormStyles>
          <form>
            <Flex justify="center">
              <Box px={3} pt={4} width={1 / 3}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="First name"
                  id="firstName"
                  name="firstName"
                  onChange={e => handleChange(e, 'firstName')}
                />
              </Box>
              <Box px={3} pt={4} width={1 / 3}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Last name"
                  id="lastName"
                  name="lastName"
                  onChange={e => handleChange(e, 'lastName')}
                />
              </Box>
            </Flex>
            <Flex justify="center">
              <Box px={3} pt={4} width={1 / 3}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Vacation start date"
                  id="startDate"
                  name="startDate"
                  onChange={e => handleChange(e, 'startDate')}
                />
              </Box>
              <Box px={3} pt={4} width={1 / 3}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Vacation end date"
                  id="returnDate"
                  name="returnDate"
                  onChange={e => handleChange(e, 'returnDate')}
                />
              </Box>
            </Flex>
            <Flex justify="center">
              <Box px={3} pt={4} width={1 / 3}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Destination"
                  id="destination"
                  name="destination"
                  onChange={e => handleChange(e, 'destination')}
                />
              </Box>
              <Box px={3} pt={4} width={1 / 3}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Activity"
                  id="activity"
                  name="activity"
                  onChange={e => handleChange(e, 'activity')}
                />
              </Box>
            </Flex>
            <Flex justify="center">
              <Box px={3} pt={4} width={1 / 3}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Emergency Contact Name"
                  id="emergencyContactName"
                  name="emergencyContactName"
                  onChange={e => handleChange(e, 'emergencyContactName')}
                />
              </Box>
              <Box px={3} pt={4} width={1 / 3}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Emergency Contact Email"
                  id="emergencyContactEmail"
                  name="emergencyContactEmail"
                  onChange={e => handleChange(e, 'emergencyContactEmail')}
                />
              </Box>
            </Flex>
            <StyledButton
              color="primary"
              disableRipple
              size="large"
              variant="contained"
              onClick={onSubmit}
            >
              Submit
            </StyledButton>
          </form>
        </FormStyles>
      </Page>
    );
  }
}
