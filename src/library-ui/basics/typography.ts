import { Color, FontSize, FontWeight, LineHeight } from 'src/library-ui';
import { responsiveHeading } from 'src/library-ui/basics/constants/typography';
import styled from 'styled-components';

/*
 * Headings (Titles)
 * These use the "Playfair Display" font for an elegant look.
 */
export const HeadingS = styled.h6`
  font-family: 'Playfair Display', serif;
  ${responsiveHeading(FontSize.V18, LineHeight.V24, FontSize.V16, LineHeight.V20)};
  font-weight: ${FontWeight.BOLD};
  color: ${Color.Neutral.V80};
  margin: 0;
`;

export const HeadingM = styled.h5`
  font-family: 'Playfair Display', serif;
  ${responsiveHeading(FontSize.V24, LineHeight.V32, FontSize.V20, LineHeight.V28)};
  font-weight: ${FontWeight.BOLD};
  color: ${Color.Neutral.V80};
  margin: 0;
`;

export const HeadingL = styled.h4`
  font-family: 'Playfair Display', serif;
  ${responsiveHeading(FontSize.V32, LineHeight.V40, FontSize.V28, LineHeight.V36)};
  font-weight: ${FontWeight.BOLD};
  color: ${Color.Neutral.V80};
  margin: 0;
`;

export const HeadingXL = styled.h3`
  font-family: 'Playfair Display', serif;
  ${responsiveHeading(FontSize.V40, LineHeight.V48, FontSize.V32, LineHeight.V40)};
  font-weight: ${FontWeight.BOLD};
  color: ${Color.Neutral.V80};
  margin: 0;
`;

/*
 * Text (Body Content)
 * These use the "Lato" font for readability in paragraphs and smaller text.
 */
export const RegularTextS = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${FontSize.V12};
  font-weight: ${FontWeight.REGULAR};
  line-height: ${LineHeight.V20};
  color: ${Color.Neutral.V70};
`;

export const RegularTextM = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${FontSize.V14};
  font-weight: ${FontWeight.REGULAR};
  line-height: ${LineHeight.V24};
  color: ${Color.Neutral.V70};
`;

export const RegularTextL = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${FontSize.V16};
  font-weight: ${FontWeight.REGULAR};
  line-height: ${LineHeight.V28};
  color: ${Color.Neutral.V70};
`;

/*
 * Bold Text Variants
 * Bold variants for emphasizing specific content.
 */
export const BoldTextS = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${FontSize.V12};
  font-weight: ${FontWeight.BOLD};
  line-height: ${LineHeight.V20};
  color: ${Color.Neutral.V70};
`;

export const BoldTextM = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${FontSize.V14};
  font-weight: ${FontWeight.BOLD};
  line-height: ${LineHeight.V24};
  color: ${Color.Neutral.V70};
`;

export const BoldTextL = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${FontSize.V16};
  font-weight: ${FontWeight.BOLD};
  line-height: ${LineHeight.V28};
  color: ${Color.Neutral.V70};
`;

/*
 * Additional Styling
 * Example: A styled paragraph for block content.
 */
export const Paragraph = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: ${FontSize.V16};
  font-weight: ${FontWeight.REGULAR};
  line-height: ${LineHeight.V28};
  color: ${Color.Neutral.V70};
  margin-bottom: 1rem;
`;
