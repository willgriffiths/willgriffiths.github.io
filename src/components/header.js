import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import { siteMetadata } from "../../gatsby-config";
import { secondary, foreground, background } from "../theme/colors";

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  width: 100%;
  @media (min-width: 1050px) {
    padding: 0 140px;
    margin-bottom: 100px;
  }
`;

const NavBar = styled.nav`
  flex: 1;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  padding: 40px 20px;
  @media (min-width: 1050px) {
    padding: 40px;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  position: relative;
  padding: 20px 30px;
  font-size: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: ${secondary};
  border-image: linear-gradient(137.5deg, #e54230, #a22ae5);
  border-image-slice: 1;
  border-image-width: 1;
  color: ${foreground};

  &:focus {
    outline-color: ${foreground};
  }
  &:hover {
    border-color: ${foreground};
    text-shadow: 1px 1px 2px ${background};
    border-image: none;
    background: ${secondary};
    background: linear-gradient(137.5deg, #e54230, #a22ae5);
  }
`;

const Header = ({ siteTitle, siteTagline }) => (
  <Container>
    <NavBar>
      <NavItem to="#contact">Contact</NavItem>
    </NavBar>
  </Container>
);

Header.defaultProps = {
  siteTitle: siteMetadata.title,
  siteTagline: siteMetadata.tagline
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteTagline: PropTypes.string
};

export default Header;
