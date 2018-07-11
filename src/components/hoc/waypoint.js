import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

const Fade = styled.span`
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
`;

export default Decorated =>
  class WayPoint extends Component {
    static propTypes = {
      children: PropTypes.node,
    };

    state = {
      visible: false,
    };

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      setTimeout(() => {
        this.setState({
          visible: window.pageYOffset - 50 < 0,
        });
      });
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = debounce(() => {
      this.setState({
        visible: window.pageYOffset - 50 < 0,
      });
    }, 50);

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
      const { children, ...rest } = this.props;
      const { visible } = this.state;
      const style = { opacity: visible ? 1 : 0 };
      return (
        <Fade style={style} onClick={this.handleClick}>
          <Decorated {...rest}>{children}</Decorated>
        </Fade>
      );
    }
  };
