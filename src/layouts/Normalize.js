import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const normalizeStyles = normalize();

// Remove lineheight from normalize style
delete normalizeStyles[0].html.lineHeight;

const Normalize = createGlobalStyle`${normalizeStyles}`;

export default Normalize;
