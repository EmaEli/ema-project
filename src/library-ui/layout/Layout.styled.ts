import { Color, Space } from 'src/library-ui/basics';
import { Breakpoint, LayoutContainerWidth } from 'src/library-ui/basics/constants/layout';
import styled from 'styled-components';

// LayoutBackground is designed to be first root element of the apps.
export const LayoutBackground = styled.div`
  align-items: center;
  background-color: ${Color.Neutral.V70};
  color: ${Color.Neutral.V10};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100vw;
`;

// LayoutContainer is designed to be the fixed-width container of the apps and it must be placed inside the LayoutBackground.
export const LayoutContainer = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  max-width: calc(100% - ${Space.V24} - ${Space.V24});
  padding: ${Space.V56} 0;
  width: 100%;

  @media (min-width: ${Breakpoint.S}) {
    width: ${LayoutContainerWidth.S};
  }

  @media (min-width: ${Breakpoint.M}) {
    width: ${LayoutContainerWidth.M};
  }

  @media (min-width: ${Breakpoint.L}) {
    width: ${LayoutContainerWidth.L};
  }

  @media (min-width: ${Breakpoint.XL}) {
    width: ${LayoutContainerWidth.XL};
  }

  @media (min-width: ${Breakpoint.XXL}) {
    width: ${LayoutContainerWidth.XXL};
  }
`;
