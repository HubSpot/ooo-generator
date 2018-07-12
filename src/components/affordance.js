import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Icon from '@material-ui/core/Icon';
import debounce from 'lodash/debounce';

const bounce = keyframes`
  0%, 100% {
    transform: translate3d(0px, 0px, 0px);
  }

  50% {
    transform: translate3d(0px, 10px, 0px);
  }
`;

const BouncingIcon = styled(Icon).attrs({
  size: 100,
})`
  && {
    animation: ${bounce} 2s ease-in-out infinite;
    bottom: 0;
    font-size: ${({ size }) => `${size}px`};
    left: 50%;
    margin-left: ${({ size }) => `-${size / 2}px`};
    position: fixed;
  }
`;

const Fade = styled.span`
  cursor: ${({ visible }) => (visible ? 'pointer' : 'default')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.6s ease-in-out, visibility 0.6s linear;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export default class Affordance extends Component {
  static propTypes = {
    threshold: PropTypes.number.isRequired,
  };

  static defaultProps = {
    threshold: 50,
  };

  state = {
    visible: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    setTimeout(() => {
      const { threshold } = this.props;
      this.setState({
        visible: window.pageYOffset - threshold < 0,
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = debounce(() => {
    const { threshold } = this.props;
    this.setState({
      visible: window.pageYOffset - threshold < 0,
    });
  }, 10);

  handleClick = () => {
    const height = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    window.scroll({
      top: height,
      behavior: 'smooth',
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <Fade onClick={this.handleClick} visible={visible}>
        <BouncingIcon>expand_more</BouncingIcon>
      </Fade>
    );
  }
}
