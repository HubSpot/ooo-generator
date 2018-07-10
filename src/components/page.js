import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { blackish, pinkish, whiteish } from './style/tokens';

const backgrounds = {
  festive: pinkish,
  plain: whiteish,
};

const textColors = {
  festive: whiteish,
  plain: blackish,
};

const Main = styled.main`
  margin: ${props => (props.align === 'center' ? 'auto' : 0)} auto;
  max-width: ${props => props.maxWidth}px;
  text-align: ${props => props.textAlign};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Shell = styled.main`
  background-color: ${props =>
    props.plain ? backgrounds.plain : backgrounds.festive};
  color: ${props => (props.plain ? textColors.plain : textColors.festive)};
  display: flex;
  margin: 0;
  min-height: 100vh;
  padding: 20px;
`;

export class Page extends React.Component {
  static propTypes = {
    align: PropTypes.oneOf(['center', 'default']),
    children: PropTypes.node,
    plain: PropTypes.bool,
    maxWidth: PropTypes.number,
    textAlign: PropTypes.oneOf(['center', 'left']),
  };
  static defaultProps = {
    align: 'default',
    plain: true,
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
