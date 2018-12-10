import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box, Heading } from 'rebass';
import Clipboard from 'clipboard';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { black } from './style/tokens';
import { ChoiceStyles } from './style/themes';

const Blurb = styled.p`
  margin-top: 8px;
  white-space: pre-wrap;
  border-left: 0.2rem solid ${black};
  padding-left: 1rem;

  @media (min-width: 1440px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const StyledButton = styled(Button)`
  && {
    > span {
      font-family: 'Avenir Next W02';
    }
  }
`;

const StyledTooltip = styled(Tooltip)`
  && div {
    font-family: 'Avenir Next W02';
  }
`;

const withWatermark = message =>
  `${message}\n\nMade with love by HubSpot's Out of Office Generator at ooogenerator.com`;

class Choice extends Component {
  constructor() {
    super();
    this.ref = React.createRef();
    this.clipboard = null;

    this.state = {
      timer: null,
    };
  }

  componentDidMount() {
    const { message } = this.props;
    const { current: $btn } = this.ref;

    this.clipboard = new Clipboard($btn, {
      text: () => withWatermark(message),
    });

    this.clipboard.on('success', this.createTimer);
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  createTimer = () => {
    const { timer } = this.state;
    clearTimeout(timer);
    this.setState({
      timer: setTimeout(() => {
        this.setState({
          timer: null,
        });
      }, 2500),
    });
  };

  render() {
    const { message, title } = this.props;
    const { timer } = this.state;

    return (
      <ChoiceStyles>
        <Flex alignItems="center" flexWrap="wrap" mb={10}>
          <Box width={[1, null, 7 / 8]}>
            <Heading fontSize={24} mt={3}>
              {title}
            </Heading>
            <Blurb>{message}</Blurb>
          </Box>
          <Box pl={[0, null, 4]} width={(1, null, 1 / 8)}>
            <Flex flexDirection="column">
              <StyledTooltip
                open={timer != null}
                placement="top"
                title="Copied!"
              >
                <StyledButton
                  buttonRef={$btn => (this.ref.current = $btn)}
                  color="primary"
                  disableRipple
                  size="small"
                  variant="contained"
                >
                  Copy
                </StyledButton>
              </StyledTooltip>
            </Flex>
          </Box>
        </Flex>
      </ChoiceStyles>
    );
  }
}

Choice.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
};

export default Choice;
