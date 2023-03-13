import styled, { css } from 'styled-components';
import { Heading } from 'rebass';

import omitProps from '../hoc/omitProps';
import * as tokens from './tokens';

const fontSizes = {
  xxl: 64,
  xl: 48,
  lg: 38,
  md: 32,
  sm: 24,
  xs: 20,
  xxs: 16,
};

const baseTextStyles = css`
  color: ${({ color }) => tokens[color] || color};
  font-family: Lexend Deca;
  font-size: ${({ size }) =>
    typeof size === 'number' ? `${size}px` : `${fontSizes[size]}px`};
  font-weight: ${({ bold }) => (bold ? 'bolder' : 'normal')};
  text-transform: ${({ upper }) => (upper ? 'uppercase' : 'none')};
`;

const responsiveFonts = (huge, tablet, mobile) => `
  @media (min-width: 1440px) {
    font-size: ${huge}px;
  }

  @media (max-width: 768px) {
    font-size: ${tablet}px;
  }

  @media (max-width: 480px) {
    font-size: ${mobile}px;
  }
`;

const Base = omitProps(['bold', 'size', 'upper'])(Heading);

export const H1 = styled(Base).attrs(
  ({ bold = true, size = fontSizes.xl, upper = true }) => ({
    bold,
    size,
    upper,
  })
)`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.xxl, fontSizes.xl, fontSizes.lg)};
`;

export const H2 = styled(Base).attrs(
  ({ bold = true, size = fontSizes.lg, upper = true }) => ({
    bold,
    size,
    upper,
  })
)`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.xl, fontSizes.lg, fontSizes.md)};
`;

export const H3 = styled(Base).attrs(
  ({ bold = true, size = fontSizes.md, upper = true }) => ({
    bold,
    size,
    upper,
  })
)`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.lg, fontSizes.md, fontSizes.sm)};
`;

export const H4 = styled(Base).attrs(
  ({ size = fontSizes.sm, upper = true }) => ({
    size,
    upper,
  })
)`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.md, fontSizes.sm, fontSizes.xs)};
`;

export const H5 = styled(Base).attrs(({ size = fontSizes.xs }) => ({
  size,
}))`
  ${() => baseTextStyles};
  line-height: 1.5;
  ${responsiveFonts(fontSizes.xs, fontSizes.xs, fontSizes.xxs)};
`;
