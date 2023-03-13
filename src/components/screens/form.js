import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { FormStyles } from '../style/themes';
import { H2 } from '../style/headers';
import Page from '../page';
import { Description } from '../style/text';

const Themes = {
  HOLIDAY: 'holiday',
  SUMMER: 'summer',
  VOTING: 'voting',
  SUSTAINABILITY: 'sustainability',
};

const StyledButton = styled(Button)`
  text-transform: uppercase;

  && span {
    font-family: 'Lexend Deca';
    color: white;
    line-height: 1;
  }
`;

const StyledTextField = styled(TextField)`
  input,
  label {
    font-family: 'Lexend Deca';

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
    font-family: 'Lexend Deca;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  span {
    font-family: 'Lexend Deca';
  }
`;

const responsiveWidths = [9 / 10, 1 / 2, 2 / 5];

export default class Form extends React.Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
    metadata: PropTypes.object,
  };

  state = {
    errors: {},
  };

  handleSubmit = e => {
    const { onSubmit, metadata } = this.props;
    const errors = Object.keys(metadata).reduce(
      (memo, field) =>
        !metadata[field].trim() ? { ...memo, [field]: true } : memo,
      {}
    );

    if (Object.keys(errors).length === 0) {
      onSubmit(e);
    } else {
      e.preventDefault();
      this.setState({ errors });
    }
  };

  renderField(field, label) {
    const {
      handleChange,
      metadata: { [field]: value },
    } = this.props;
    const {
      errors: { [field]: error },
    } = this.state;

    return (
      <FormControl style={{ width: '100%' }} error={error}>
        <StyledTextField
          error={error}
          label={label}
          id={field}
          name={field}
          onChange={e => handleChange(e, field)}
          value={value}
        />
        <FormHelperText>
          {error ? 'Please fill out required field' : ''}
        </FormHelperText>
      </FormControl>
    );
  }

  render() {
    const { handleChange, metadata } = this.props;

    return (
      <Page align="center">
        <H2 mb={4} style={{ paddingTop: '40px' }}>
          You’re Ready to Take Time Off.
          <br />
          But Is Your Inbox?
        </H2>
        <Description>
          {`
            Whether you’re going on a tropical trip or taking a personal day to
            unplug, you’ll have to write an out of office email responder. So
            why not write a good one? Let’s retire phrases like "Sorry, I have
            limited access to Wifi.” You shouldn’t be sorry, we all need to take
            a break sometimes. (And you’re not fooling anyone about the Wifi.)
          `}
        </Description>
        <Description>
          {`
            Fill out quick details about your time away and the generator will
            give you a personalized and playful 'OOO' email. Copy-paste it into
            your email settings and enjoy your time away.
          `}
        </Description>
        <FormStyles>
          <form>
            <Flex justifyContent="center" flexWrap="wrap">
              <Box px={3} pt={3} width={responsiveWidths}>
                {this.renderField('firstName', 'First name')}
              </Box>
              <Box px={3} pt={3} width={responsiveWidths}>
                {this.renderField('lastName', 'Last name')}
              </Box>
            </Flex>
            <Flex justifyContent="center" flexWrap="wrap">
              <Box px={3} pt={3} width={responsiveWidths}>
                {this.renderField('leaveDate', 'OOO start date')}
              </Box>
              <Box px={3} pt={3} width={responsiveWidths}>
                {this.renderField('returnDate', 'OOO end date')}
              </Box>
            </Flex>
            <Flex justifyContent="center" flexWrap="wrap">
              <Box px={3} pt={3} width={responsiveWidths}>
                {this.renderField('destination', 'Destination')}
              </Box>
              <Box px={3} pt={3} width={responsiveWidths}>
                {this.renderField('activity', 'Activity (e.g. skiing)')}
              </Box>
            </Flex>
            <Flex justifyContent="center" flexWrap="wrap">
              <Box px={3} pt={3} width={responsiveWidths}>
                {this.renderField(
                  'emergencyContactName',
                  'Emergency contact name'
                )}
              </Box>
              <Box px={3} pt={3} width={responsiveWidths}>
                {this.renderField(
                  'emergencyContactEmail',
                  'Emergency contact email'
                )}
              </Box>
            </Flex>
            <Flex justifyContent="center" flexDirection="column">
              <Box mt={4}>
                <FormControl>
                  <InputLabel htmlFor="theme">Theme</InputLabel>
                  <Select
                    input={<StyledInput name="theme" id="theme" />}
                    onChange={e => handleChange(e, 'theme')}
                    value={metadata.theme}
                  >
                    <StyledMenuItem value={Themes.VOTING}>
                      <span>Voting</span>
                    </StyledMenuItem>
                    <StyledMenuItem value={Themes.HOLIDAY}>
                      <span>Holiday season</span>
                    </StyledMenuItem>
                    <StyledMenuItem value={Themes.SUMMER}>
                      <span>Summertime</span>
                    </StyledMenuItem>
                    <StyledMenuItem value={Themes.SUSTAINABILITY}>
                      <span>Sustainability</span>
                    </StyledMenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box my={4}>
                <StyledButton
                  color="primary"
                  disableRipple
                  onClick={this.handleSubmit}
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
