import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import background from '../images/background.png';
import { black, slate, gray, white } from './style/tokens';

const backgroundImage = `linear-gradient(${slate} 100%,
  ${slate} 0%), url(${background})`;

const Main = styled.main`
  margin: ${props => (props.align === 'center' ? 'auto' : 0)} auto;
  max-width: ${props => props.maxWidth}px;
  text-align: ${props => props.textAlign};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Shell = styled.main`
  background-color: ${({ dark }) => (dark ? black : white)};
  background-image: ${({ dark }) => dark && backgroundImage};
  color: ${({ dark }) => (dark ? gray : black)};
  display: flex;
  margin: 0;
  min-height: 100vh;
  padding: 20px;
`;

export class Page extends React.Component {
  static propTypes = {
    align: PropTypes.oneOf(['center', 'default']),
    children: PropTypes.node,
    dark: PropTypes.bool,
    overlay: PropTypes.bool,
    maxWidth: PropTypes.number,
    textAlign: PropTypes.oneOf(['center', 'left']),
  };
  static defaultProps = {
    align: 'default',
    dark: false,
    overlay: false,
    maxWidth: 960,
    textAlign: 'center',
  };

  render() {
    const { align, children, maxWidth, textAlign, ...rest } = this.props;
    return (
      <Shell {...rest}>
        <Main align={align} maxWidth={maxWidth} textAlign={textAlign}>
          {children}
        </Main>
      </Shell>
    );
  }
}

export default Page;
