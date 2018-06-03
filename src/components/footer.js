import React from "react";
import PropTypes from "prop-types";
import iconGithub from "./icon-github.svg";
import iconEmail from "./icon-email.svg";

const Footer = ({ githubUsername, email, author }) => (
  <footer className="site-footer">
    <div className="wrapper">
      <h2 className="footer-heading">Say hi</h2>
      <div className="contact-links">
        <a href={`https://github.com/${githubUsername}`}>
          <span className="icon">
            <img src={iconGithub} alt="Github Logo" />
          </span>
        </a>
        <a href={`mailto:${email}`}>
          <span className="icon">
            <img src={iconEmail} alt="Github Logo" />
          </span>
        </a>
      </div>
      <p>© 2016 {`${author.toUpperCase()}`}. ALL RIGHTS RESERVED</p>
    </div>
  </footer>
);

Footer.defaultProps = {
  author: "",
  githubUsername: "",
  email: ""
};

Footer.propTypes = {
  author: PropTypes.string,
  email: PropTypes.string,
  githubUsername: PropTypes.string
};

export default Footer;
