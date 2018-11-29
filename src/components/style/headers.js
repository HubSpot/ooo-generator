import styled, { css } from 'styled-components';
import { Heading } from 'rebass';
import omitProps from '../hoc/omitProps';
import * as tokens from './tokens';

const fontSizes = {
  xxl: 56,
  xl: 48,
  lg: 38,
  md: 32,
  sm: 24,
  xs: 20,
  xxs: 16,
};

const fontFamilies = {
  peace: 'peace_sansregular',
  comfort: 'Comfortaa',
};

const baseTextStyles = css`
  color: ${({ color }) => tokens[color] || color};
  font-family: ${({ family }) => fontFamilies[family] || fontFamilies.peace};
  font-size: ${({ size }) =>
    typeof size === 'number' ? `${size}px` : `${fontSizes[size]}px`};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
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

const Base = omitProps(['bold', 'family', 'size', 'upper'])(Heading);

export const H1 = styled(Base).attrs(
  ({ size = fontSizes.xl, upper = true }) => ({
    size,
    upper,
  })
)`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.xxl, fontSizes.xl, fontSizes.lg)};
`;

export const H2 = styled(Base).attrs(
  ({ size = fontSizes.lg, upper = true }) => ({
    size,
    upper,
  })
)`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.xl, fontSizes.lg, fontSizes.md)};
`;

export const H3 = styled(Base).attrs(
  ({ size = fontSizes.md, upper = true }) => ({
    size,
    upper,
  })
)`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.lg, fontSizes.md, fontSizes.sm)};
`;

export const H4 = styled(Base).attrs(
  ({ family = 'comfort', size = fontSizes.sm, upper = true }) => ({
    family,
    size,
    upper,
  })
)`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.md, fontSizes.sm, fontSizes.xs)};
`;

export const H5 = styled(Base).attrs(
  ({ bold = true, family = 'comfort', size = fontSizes.xs }) => ({
    bold,
    family,
    size,
  })
)`
  ${() => baseTextStyles};
  line-height: 1.5;
  ${responsiveFonts(fontSizes.xs, fontSizes.xs, fontSizes.xxs)};
`;
