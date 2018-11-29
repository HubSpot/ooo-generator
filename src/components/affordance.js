import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Icon from '@material-ui/core/Icon';
import debounce from 'lodash/debounce';
import { whiteish, pinkish } from './style/tokens';

const bounce = keyframes`
  0%, 100% {
    transform: translate3d(0px, 0px, 0px);
  }

  50% {
    transform: translate3d(0px, 10px, 0px);
  }
`;

const BouncingIcon = styled(Icon).attrs(() => ({
  size: 100,
}))`
  && {
    animation: ${bounce} 2s ease-in-out infinite;
    bottom: 0;
    color: ${({ color }) => (color === 'primary' ? whiteish : pinkish)};
    font-size: ${({ size }) => `${size}px`};
    left: 50%;
    margin-left: ${({ size }) => `-${size / 2}px`};
    position: fixed;

    @media (max-width: 768px) {
      font-size: ${({ size }) => `${size * 0.8}px`};
      margin-left: ${({ size }) => `-${(size * 0.8) / 2}px`};
    }

    @media (max-width: 480px) {
      font-size: ${({ size }) => `${size * 0.6}px`};
      margin-left: ${({ size }) => `-${(size * 0.6) / 2}px`};
    }
  }
`;

const Fade = styled.span`
  cursor: ${({ visible }) => (visible ? 'pointer' : 'default')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.6s ease-in-out, visibility 0.6s linear;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

const isVisible = (threshold, buffer = 50) =>
  threshold != null && Math.abs(window.pageYOffset - threshold) < buffer;

export default class Affordance extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary']),
    scrollTo: PropTypes.number,
    threshold: PropTypes.number,
  };

  static defaultProps = {
    color: 'primary',
  };

  state = {
    visible: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    setTimeout(() => {
      const { threshold } = this.props;
      this.setState({
        visible: isVisible(threshold),
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = debounce(() => {
    const { threshold } = this.props;
    this.setState({
      visible: isVisible(threshold),
    });
  }, 10);

  handleClick = () => {
    const { scrollTo } = this.props;
    window.scroll({
      top: scrollTo,
      behavior: 'smooth',
    });
  };

  render() {
    const { color } = this.props;
    const { visible } = this.state;
    return (
      <Fade onClick={this.handleClick} visible={visible}>
        <BouncingIcon color={color}>expand_more</BouncingIcon>
      </Fade>
    );
  }
}
