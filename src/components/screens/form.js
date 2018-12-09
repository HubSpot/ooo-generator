import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { FormStyles } from '../style/themes';
import { H2 } from '../style/headers';
import Page from '../page';

const StyledButton = styled(Button)`
  text-transform: uppercase;

  && span {
    font-family: 'Avenir Next W02';
    color: white;
    line-height: 1;
  }
`;

const StyledTextField = styled(TextField)`
  input,
  label {
    font-family: 'Avenir Next W02';

    @media (min-width: 1440px) {
      font-size: 16px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const StyledInput = styled(Input)`
  div {
    font-family: 'Avenir Next W02';
  }
`;

const StyledMenuItem = styled(MenuItem)`
  span {
    font-family: 'Avenir Next W02';
  }
`;

const Description = styled.p`
  padding: 0 48px;
`;

const responsiveWidths = [9 / 10, 1 / 2, 2 / 5];

export default class Form extends React.Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
  };

  state = {
    theme: 'holiday',
  };

  handleThemeChange = e => {
    const {
      target: { value: theme },
    } = e;
    const { handleChange } = this.props;

    handleChange(e, 'theme');
    this.setState({ theme });
  };

  render() {
    const { handleChange, onSubmit } = this.props;
    const { theme } = this.state;

    return (
      <Page align="center">
        <H2 mb={4} style={{ paddingTop: '40px' }}>
          You’re Ready For Vacation.
          <br />
          But Is Your Inbox?
        </H2>
        <Description>
          {`
            Whether you're going on a tropical trip or headed home for the
            holidays, you have to write an out of office email responder. So,
            why not write a good one? Saying "Sorry, I have limited access to
            Wifi" isn't fooling anyone. (We know you aren't sorry.)
          `}
        </Description>
        <Description>
          {`Share quick details about your time away and the generator will give
          you an 'OOO' email that's as fun as your vacation. (Well, almost.)`}
        </Description>
        <FormStyles>
          <form>
            <Flex justifyContent="center" flexWrap="wrap">
              <Box px={3} pt={4} width={responsiveWidths}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="First name"
                  id="firstName"
                  name="firstName"
                  onChange={e => handleChange(e, 'firstName')}
                />
              </Box>
              <Box px={3} pt={4} width={responsiveWidths}>
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
            <Flex justifyContent="center" flexWrap="wrap">
              <Box px={3} pt={4} width={responsiveWidths}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Vacation start date"
                  id="leaveDate"
                  name="leaveDate"
                  onChange={e => handleChange(e, 'leaveDate')}
                />
              </Box>
              <Box px={3} pt={4} width={responsiveWidths}>
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
            <Flex justifyContent="center" flexWrap="wrap">
              <Box px={3} pt={4} width={responsiveWidths}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Destination"
                  id="destination"
                  name="destination"
                  onChange={e => handleChange(e, 'destination')}
                />
              </Box>
              <Box px={3} pt={4} width={responsiveWidths}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Activity (e.g. snorkeling)"
                  id="activity"
                  name="activity"
                  onChange={e => handleChange(e, 'activity')}
                />
              </Box>
            </Flex>
            <Flex justifyContent="center" flexWrap="wrap">
              <Box px={3} pt={4} width={responsiveWidths}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Emergency contact name"
                  id="emergencyContactName"
                  name="emergencyContactName"
                  onChange={e => handleChange(e, 'emergencyContactName')}
                />
              </Box>
              <Box px={3} pt={4} width={responsiveWidths}>
                <StyledTextField
                  style={{ width: '100%' }}
                  required
                  label="Emergency contact email"
                  id="emergencyContactEmail"
                  name="emergencyContactEmail"
                  onChange={e => handleChange(e, 'emergencyContactEmail')}
                />
              </Box>
            </Flex>
            <Flex justifyContent="center" flexDirection="column">
              <Box mt={4}>
                <FormControl>
                  <InputLabel htmlFor="theme">Theme</InputLabel>
                  <Select
                    input={<StyledInput name="theme" id="theme" />}
                    onChange={this.handleThemeChange}
                    value={theme}
                  >
                    <StyledMenuItem value="holiday">
                      <span>Holiday season</span>
                    </StyledMenuItem>
                    <StyledMenuItem value="summer">
                      <span>Summertime</span>
                    </StyledMenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box my={4}>
                <StyledButton
                  color="primary"
                  disableRipple
                  onClick={onSubmit}
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Submit
                </StyledButton>
              </Box>
            </Flex>
          </form>
        </FormStyles>
      </Page>
    );
  }
}
