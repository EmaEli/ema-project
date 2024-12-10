import { createGlobalStyle } from 'styled-components';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/playfair-display/700.css';
import { Color } from 'src/library-ui';

export const GlobalStyle = createGlobalStyle`
  /* Reset styles */
  html, body, iframe,
  form, label, button,
  h1, h2, h3, h4, h5, h6,
  p, img, ol, ul, li,
  table, tbody, tfoot, thead, tr, th, td {
    border: 0;
    margin: 0;
    padding: 0;
  }

  /* Body styles */
  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: ${Color.Neutral.V70};
    background-color: ${Color.Neutral.V10};
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Headings styles */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    color: ${Color.Neutral.V80};
    line-height: 1.3;
  }

  /* Link styles */
  a {
    text-decoration: none;
    color: ${Color.Blue.V40};
    &:hover {
      color: ${Color.Blue.V50};
    }
  }

  /* Remove list styles */
  ol, ul {
    list-style: none;
  }

  /* Table styles */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Accessibility focus styles */
  button, a {
    &:focus {
      outline: 2px solid ${Color.Blue.V30};
      outline-offset: 2px;
    }
  }

  /* Root container */
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
