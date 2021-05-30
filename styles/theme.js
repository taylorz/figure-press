import { createGlobalStyle } from 'styled-components';

// Style values:
const buffer = 8;
const timing = '.15s';
const easing = 'ease-in-out';

export const theme = {
  util: {
    buffer,
    timing,
    transition: `all ${timing} ${easing}`,
    zIndexTop: 3,
    zIndexMiddle: 2,
    zIndexBottom: 1,
  },
  breakpoint: {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1440
  },
  color: {
    white: '#FFFFFF',
    black: '#222222',
    gray: '#CCCCCC',
    green: 'green'
  },
  text: {
    size: 14,
    lineHeight: 16,
    sizeLarge: 20,
    lineHeightLarge: 24,
    family: 'Atlas Grotesk, Helvetica Neue, sans-serif'
  }
};

// Global styles:
export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0 !important;
    -webkit-overflow-scrolling: touch;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${props => props.theme.text.family};
    color: ${props => props.theme.text.color};
  }
  * {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    font-family: ${({ theme }) => theme.text.family};
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

