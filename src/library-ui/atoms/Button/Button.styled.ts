import styled, { css } from 'styled-components';
import { Color } from '../../basics/constants/colors';
import { Space } from '../../basics/constants/spacing';
import { FontSize, FontWeight } from '../../basics/constants/typography';

/**
 * Button Variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

/**
 * Button Sizes
 */
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
}

/**
 * Styled Button Component
 */
export const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: ${Space.V8};
  cursor: pointer;
  font-family: inherit;
  font-weight: ${FontWeight.MEDIUM};
  text-align: center;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  /* Variants */
  ${props =>
    props.$variant === 'primary' &&
    css`
      background-color: ${Color.Blue.V40};
      color: ${Color.Neutral.V00};

      &:hover {
        background-color: ${Color.Blue.V50};
      }

      &:disabled {
        background-color: ${Color.Neutral.V30};
        cursor: not-allowed;
      }
    `}

  ${props =>
    props.$variant === 'secondary' &&
    css`
      background-color: ${Color.Neutral.V10};
      color: ${Color.Blue.V40};
      border: 1px solid ${Color.Blue.V40};

      &:hover {
        background-color: ${Color.Blue.V10};
      }

      &:disabled {
        background-color: ${Color.Neutral.V20};
        border-color: ${Color.Neutral.V40};
        color: ${Color.Neutral.V50};
        cursor: not-allowed;
      }
    `}

  ${props =>
    props.$variant === 'ghost' &&
    css`
      background-color: transparent;
      color: ${Color.Blue.V40};
      border: 1px solid transparent;

      &:hover {
        background-color: ${Color.Blue.V10};
        border-color: ${Color.Blue.V40};
      }

      &:disabled {
        color: ${Color.Neutral.V50};
        cursor: not-allowed;
      }
    `}

  /* Sizes */
  ${props =>
    props.$size === 'small' &&
    css`
      font-size: ${FontSize.V12};
      padding: ${Space.V8} ${Space.V16};
    `}

  ${props =>
    props.$size === 'medium' &&
    css`
      font-size: ${FontSize.V14};
      padding: ${Space.V12} ${Space.V24};
    `}

  ${props =>
    props.$size === 'large' &&
    css`
      font-size: ${FontSize.V16};
      padding: ${Space.V16} ${Space.V32};
    `}
`;
