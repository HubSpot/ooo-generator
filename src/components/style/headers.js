import styled, { css } from 'styled-components';
import { Heading } from 'rebass';
import omitProps from '../hoc/omitProps';
import * as tokens from './tokens';

const fontSizes = {
  xxl: 82,
  xl: 60,
  lg: 42,
  md: 36,
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

const responsiveFonts = (tablet, mobile) => `
  @media (max-width: 768px) {
    font-size: ${tablet}px;
  }

  @media (max-width: 480px) {
    font-size: ${mobile}px;
  }
`;

const Base = omitProps(['bold', 'family', 'size', 'upper'])(Heading);

export const H1 = styled(Base).attrs({
  size: ({ size = fontSizes.xl }) => size,
  upper: ({ upper = true }) => upper,
})`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.xl, fontSizes.lg)};
`;

export const H2 = styled(Base).attrs({
  size: ({ size = fontSizes.lg }) => size,
  upper: ({ upper = true }) => upper,
})`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.lg, fontSizes.md)};
`;

export const H3 = styled(Base).attrs({
  size: ({ size = fontSizes.md }) => size,
  upper: ({ upper = true }) => upper,
})`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.md, fontSizes.sm)};
`;

export const H4 = styled(Base).attrs({
  family: ({ family = 'comfort' }) => family,
  size: ({ size = fontSizes.sm }) => size,
  upper: ({ upper = true }) => upper,
})`
  ${() => baseTextStyles};
  ${responsiveFonts(fontSizes.sm, fontSizes.xs)};
`;

export const H5 = styled(Base).attrs({
  bold: ({ bold = true }) => bold,
  family: ({ family = 'comfort' }) => family,
  size: ({ size = fontSizes.sm }) => size,
})`
  ${() => baseTextStyles};
  line-height: 1.5;
  ${responsiveFonts(fontSizes.xs, fontSizes.xxs)};
`;
