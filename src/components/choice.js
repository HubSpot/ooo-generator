import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box, Heading } from 'rebass';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clipboard from 'clipboard';

import { ChoiceStyles } from './style/themes';

const Blurb = styled.p`
  margin-top: 8px;
`;

const StyledFlex = styled(Flex)`
  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
`;

const withWatermark = message =>
  `${message}\n\nMade with love by HubSpot's Out-Of-Office Email Generator`;

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
        <StyledFlex alignItems="center" mb={10}>
          <Box width={4 / 5}>
            <Heading fontSize={28} mt={3}>
              {title}
            </Heading>
            <Blurb>{message}</Blurb>
          </Box>
          <Box pl={4} width={1 / 5}>
            <Flex flexDirection="column">
              <Tooltip open={timer != null} placement="top" title="Copied!">
                <Button
                  buttonRef={$btn => (this.ref.current = $btn)}
                  color="primary"
                  disableRipple
                  size="large"
                  variant="contained"
                >
                  Copy
                </Button>
              </Tooltip>
            </Flex>
          </Box>
        </StyledFlex>
      </ChoiceStyles>
    );
  }
}

Choice.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
};

export default Choice;
