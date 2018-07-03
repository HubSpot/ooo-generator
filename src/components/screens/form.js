import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import TextField from '@material-ui/core/TextField';

import { DateRangePicker } from '../date-range-picker';
import { FormStyles } from '../style/material-ui';
import { H2 } from '../style/headers';
import Page from '../page';

export default class Form extends React.Component {
  state = {
    startDate: null,
    endDate: null,
  };

  render() {
    return (
      <Page align="center">
        <H2 mb={4}>
          You’re Ready For Vacation.<br />But Is Your Inbox?
        </H2>
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
        <FormStyles>
          <form>
            <Flex justify="center">
              <Box px={3} pt={4} width={1 / 3}>
                <TextField
                  style={{ width: '100%' }}
                  required
                  label="First name"
                  id="first"
                  name="first"
                />
              </Box>
              <Box px={3} pt={4} width={1 / 3}>
                <TextField
                  style={{ width: '100%' }}
                  required
                  label="Last name"
                  id="last"
                  name="last"
                />
              </Box>
            </Flex>
            <Flex justify="center">
              <Box px={3} pt={4} width={2 / 3}>
                <DateRangePicker
                  startDate={this.state.startDate}
                  startDateId="date-start"
                  endDate={this.state.endDate}
                  endDateId="date-end"
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })
                  }
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput =>
                    this.setState({ focusedInput })
                  }
                  showClearDates={true}
                />
              </Box>
            </Flex>
          </form>
        </FormStyles>
      </Page>
    );
  }
}
