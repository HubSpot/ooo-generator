import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from 'react-spinner';

import { H3 } from '../style/headers';
import Page from '../page';

const Fullscreen = styled(Page)`
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  width: 100vw;
`;

class LoadingPage extends React.Component {
  static propTypes = {
    timeout: PropTypes.number,
    onNextStep: PropTypes.func,
  };

  componentDidMount() {
    const { timeout, onNextStep } = this.props;
    setTimeout(onNextStep, timeout);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = null;
  }

  render() {
    return (
      <Fullscreen align="center" dark={true}>
        <H3 color="white" mb={4}>
          Please wait while we generate
          <br />
          your vacation-worthy OOO message
        </H3>
        <Spinner />
      </Fullscreen>
    );
  }
}

export default LoadingPage;
