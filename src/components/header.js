import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { siteMetadata } from "../../gatsby-config";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

Header.defaultProps = {
  siteTitle: siteMetadata.title
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

export default Header;
