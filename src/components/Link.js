import styled from "styled-components";
import { Link } from "gatsby";
import { lighten } from "polished";
import theme from "../styles/colors";

export default styled(Link)`
  text-decoration: none;
  font-weight: 400;
  color: ${theme.secondary};
  display: block;
  margin-bottom: 12px;
  :visited {
    color: ${lighten(0.05, theme.secondary)};
  }
  :hover {
    color: ${theme.secondary};
  }
  :active {
    color: ${lighten(0.1, theme.secondary)};
  }
`;
