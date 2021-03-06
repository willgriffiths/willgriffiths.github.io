import { createGlobalStyle } from "styled-components";
import theme from "../styles/colors";
import { media } from "../styles/style-utils";
import { typography } from "../styles/variables";

const { baseFontSize, baseLineHeight } = typography;
/* https://css-tricks.com/optimizing-large-scale-displays/ */

// eslint-disable-next-line
const CoreCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  h1,
  h2,
  h3,
  h4,
  p,
  nav,
  span,
  a {
    font-family: "Source Sans Pro", "Helvetica", "Arial", sans-serif;
  }
  html {
    /* https://css-tricks.com/optimizing-large-scale-displays/ */
    line-height: ${baseLineHeight};
    font-size: ${baseFontSize}px;
  }

  html {
    /* https://css-tricks.com/optimizing-large-scale-displays/ */
    ${media.medium`
    font-size: ${baseFontSize * 1.2}px;
    `}
    ${media.large`font-size: ${baseFontSize * 1.25}px; line-height: 1.4;`}
  }
  
  body {
    color: ${theme.foreground};
    background-color: ${theme.background};
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default CoreCSS;
