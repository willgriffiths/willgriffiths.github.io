import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { siteMetadata } from "../../gatsby-config";
import avatar from "../components/WillGriffiths.png";

const Header = ({ siteTitle, siteTagline }) => (
  <header className="home">
    <div className="header-upper">
      <div className="header-cover" />
      <div className="header-portrait">
        <img alt="" src={avatar} />
      </div>
    </div>
    <Link to="/">
      <h1 className="header-title">{siteTitle}</h1>
    </Link>
    <h2 className="header-subtitle">{siteTagline}</h2>
  </header>
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
