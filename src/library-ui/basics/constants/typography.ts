import { Breakpoint } from 'src/library-ui/basics/constants/layout';
import { css } from 'styled-components';

// Font-size
export enum FontSize {
  V12 = '12px',
  V14 = '14px',
  V16 = '16px',
  V18 = '18px',
  V20 = '20px',
  V24 = '24px',
  V28 = '28px',
  V32 = '32px',
  V40 = '40px',
}

// Font-weight
export enum FontWeight {
  THIN = '100', // Hairline
  EXTRA_LIGHT = '200', // Extra Light
  LIGHT = '300', // Light
  REGULAR = '400', // Normal
  MEDIUM = '500', // Medium
  SEMI_BOLD = '600', // Semi Bold
  BOLD = '700', // Bold
  EXTRA_BOLD = '800', // Extra Bold
  BLACK = '900', // Black
  EXTRA_BLACK = '950' // Ultra Black (Non-standard, supported by some fonts)
}

// Line-height
export enum LineHeight {
  V16 = '16px',
  V20 = '20px',
  V24 = '24px',
  V28 = '28px',
  V32 = '32px',
  V36 = '36px',
  V40 = '40px',
  V48 = '48px',
}

export enum IconSize {
  V12 = '12',
  V16 = '16',
  V18 = '18',
  V24 = '24',
  V32 = '32',
  V56 = '56',
  V80 = '80',
  V120 = '120',
}

// Common typography utilities
export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps {
  $tone?: string;
  $ellipsis?: boolean;
  $shrink?: boolean;
  $strike?: boolean;
  $textAlign?: TypographyAlign;
  $break?: boolean;
  $preLine?: boolean;
}

export const responsiveHeading = (defaultSize: string, defaultLineHeight: string, responsiveSize: string, responsiveLineHeight: string) => css`
  font-size: ${defaultSize};
  line-height: ${defaultLineHeight};

  @media (max-width: ${Breakpoint.M}) {
    font-size: ${responsiveSize};
    line-height: ${responsiveLineHeight};
  }
`;
