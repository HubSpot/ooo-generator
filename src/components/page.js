import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const backgrounds = {
  festive: 'rgb(236, 171, 164)',
  plain: 'rgb(255, 255, 255)',
};

const textColors = {
  festive: 'rgb(255, 255, 255)',
  plain: 'rgb(68, 68, 68)',
};

const Main = styled.main`
  margin: ${props => (props.align === 'center' ? 'auto' : 0)} auto;
  max-width: ${props => props.maxWidth}px;
  text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
`;

const Shell = styled.main`
  background-color: ${props =>
    props.plain ? backgrounds.plain : backgrounds.festive};
  color: ${props => (props.plain ? textColors.plain : textColors.festive)};
  display: flex;
  margin: 0;
  min-height: 100vh;
`;

export class Page extends React.Component {
  static propTypes = {
    align: PropTypes.oneOf(['center', 'default']),
    plain: PropTypes.bool,
    maxWidth: PropTypes.number,
  };
  static defaultProps = {
    align: 'default',
    plain: true,
    maxWidth: 960,
  };

  render() {
    const { align, children, maxWidth, ...rest } = this.props;
    return (
      <Shell {...rest}>
        <Main align={align} maxWidth={maxWidth}>{children}</Main>
      </Shell>
    );
  }
}

export default Page;
