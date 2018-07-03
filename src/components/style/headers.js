import styled, { css } from 'styled-components';
import { Heading } from 'rebass';

import * as tokens from './tokens';

const fontSizes = {
  xxl: 82,
  xl: 72,
  lg: 48,
  md: 40,
  sm: 24,
  xs: 22,
};

const fontFamilies = {
  peace: 'peace_sansregular',
  comfort: 'Comfortaa',
};

const baseTextStyles = css`
  font-family: ${props =>
    fontFamilies[props.family] || fontFamilies.peace};
  font-size: ${props =>
    typeof props.size === 'number'
      ? `${props.size}px`
      : `${fontSizes[props.size]}px`};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props => tokens[props.color] || props.color};
  text-transform: ${props => (props.upper ? 'uppercase' : 'none')};
`;

export const H1 = styled(Heading)`
  ${props => baseTextStyles};
`;
H1.defaultProps = {
  upper: true,
  size: fontSizes.xl,
};

export const H2 = styled(Heading)`
  ${props => baseTextStyles};
`;
H2.defaultProps = {
  upper: true,
  size: 'lg',
};

export const H3 = styled(Heading)`
  ${props => baseTextStyles};
`;
H3.defaultProps = {
  size: 'md',
  upper: true,
};

export const H4 = styled(Heading)`
  ${props => baseTextStyles};
`;
H4.defaultProps = {
  family: 'comfort',
  size: 'sm',
  upper: true,
};

export const H5 = styled(Heading)`
  ${props => baseTextStyles};
  line-height: 1.5;
`;
H5.defaultProps = {
  bold: true,
  family: 'comfort',
  size: 'xs',
};
