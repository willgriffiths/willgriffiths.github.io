import styled from "styled-components";
import { Link } from "gatsby";
import { lighten } from "polished";
import theme from "../styles/colors";

export default styled(Link)`
  text-decoration: none;
  font-weight: 400;
  color: ${theme.secondary};
  display: block;
  :visited {
    color: ${theme.secondary};
  }
  :hover {
    color: ${lighten(0.15, theme.secondary)};
  }
  :active {
    color: ${lighten(0.1, theme.secondary)};
  }
`;
