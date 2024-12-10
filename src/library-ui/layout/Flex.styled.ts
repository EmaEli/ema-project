import { Space } from 'src/library-ui/basics';
import { Breakpoint } from 'src/library-ui/basics/constants/layout';
import styled, { css } from 'styled-components';

type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch';
type FlexJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

type FlexVariant = 'centered' | 'spaced';

interface FlexProps {
  $gap?: Space;
  $align?: FlexAlign;
  $justify?: FlexJustify;
  $wrap?: boolean;
  $variant?: FlexVariant; // Predefined layout variants
  $alignMobile?: FlexAlign; // Responsive alignment for mobile
  $alignDesktop?: FlexAlign; // Responsive alignment for desktop
}

/**
 * A flexible layout container for horizontal alignment.
 */
export const HorizontalFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.$align || 'stretch'};
  justify-content: ${props => props.$justify || 'flex-start'};
  gap: ${props => props.$gap || 0};

  ${props =>
    props.$wrap &&
    css`
      flex-wrap: wrap;
    `}

  /* Predefined variants */
  ${props =>
    props.$variant === 'centered' &&
    css`
      justify-content: center;
      align-items: center;
    `}

  ${props =>
    props.$variant === 'spaced' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  /* Responsive alignment */
  align-items: ${props => props.$alignMobile || 'stretch'};

  @media (min-width: ${Breakpoint.M}) {
    align-items: ${props => props.$alignDesktop || props.$alignMobile || 'stretch'};
  }
`;

/**
 * A flexible layout container for vertical alignment.
 */
export const VerticalFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$align || 'stretch'};
  justify-content: ${props => props.$justify || 'flex-start'};
  gap: ${props => props.$gap || 0};

  /* Predefined variants */
  ${props =>
    props.$variant === 'centered' &&
    css`
      justify-content: center;
      align-items: center;
    `}

  ${props =>
    props.$variant === 'spaced' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
`;
