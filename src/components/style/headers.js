import styled, { css } from 'styled-components';
import { Heading } from 'rebass';

import * as tokens from './tokens';

const fontSizes = {
  xl: 72,
  lg: 63,
  md: 32,
  sm: 24,
  xs: 8,
};

const baseTextStyles = css`
  font-family: ${props => tokens.fontFamilies[props.family] || tokens.fontFamilies.peace};
  font-size: ${props =>
    typeof props.size === 'number' ? `${props.size}px` : `${fontSizes[props.size]}px`};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => tokens[props.color] || props.color};
  text-transform: ${props => (props.upper ? 'uppercase' : 'none' )};
`;

export const H1 = styled(Heading)`
  ${props => baseTextStyles};
`;
H1.defaultProps = {
  upper: true,
  size: fontSizes.xl,
};

export const H4 = styled(Heading)`
  ${props => baseTextStyles};
`;
H4.defaultProps = {
  family: 'comfort',
  size: 'sm',
  upper: true,
};
