import { Space } from 'src/library-ui/basics';
import { Breakpoint } from 'src/library-ui/basics/constants/layout';
import styled from 'styled-components';

interface ContainerProps {
  $overflow?: 'auto' | 'hidden' | 'scroll';
}

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: 100%;
  max-width: calc(100% - ${Space.V24} * 2);
  padding: ${Space.V24};
  overflow: ${props => props.$overflow || 'visible'};

  @media (min-width: ${Breakpoint.S}) {
    max-width: 540px;
  }
  @media (min-width: ${Breakpoint.M}) {
    max-width: 720px;
  }
  @media (min-width: ${Breakpoint.L}) {
    max-width: 960px;
  }
  @media (min-width: ${Breakpoint.XL}) {
    max-width: 1140px;
  }
  @media (min-width: ${Breakpoint.XXL}) {
    max-width: 1320px;
  }
`;
