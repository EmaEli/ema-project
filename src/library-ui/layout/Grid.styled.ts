import { Space } from 'src/library-ui/basics';
import { Breakpoint } from 'src/library-ui/basics/constants/layout';
import styled, { css } from 'styled-components';

interface GridProps {
  $s?: string;
  $m?: string;
  $l?: string;
  $xl?: string;
  $xxl?: string;
  $gap?: Space;
  $stretch?: boolean;
  $autoColumns?: string;
}

export const ResponsiveGrid = styled.div<GridProps>`
  display: grid;
  gap: ${props => props.$gap || Space.V24};
  grid-template-columns: ${props => (props.$autoColumns ? `repeat(auto-fit, minmax(${props.$autoColumns}, 1fr))` : '1fr')};
  width: 100%;

  ${props =>
    props.$s &&
    css`
      @media (min-width: ${Breakpoint.S}) {
        grid-template-columns: ${props.$s};
      }
    `}

  ${props =>
    props.$m &&
    css`
      @media (min-width: ${Breakpoint.M}) {
        grid-template-columns: ${props.$m};
      }
    `}

  ${props =>
    props.$l &&
    css`
      @media (min-width: ${Breakpoint.L}) {
        grid-template-columns: ${props.$l};
      }
    `}

  ${props =>
    props.$xl &&
    css`
      @media (min-width: ${Breakpoint.XL}) {
        grid-template-columns: ${props.$xl};
      }
    `}

  ${props =>
    props.$xxl &&
    css`
      @media (min-width: ${Breakpoint.XXL}) {
        grid-template-columns: ${props.$xxl};
      }
    `}

  ${props =>
    props.$stretch &&
    css`
      align-items: stretch;
    `}
`;
