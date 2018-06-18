import React from "react";
import PropTypes from "prop-types";

const Project = ({ frontmatter, html }) => (
  <div>
    <a href={frontmatter.path}>
      <h2>
        {frontmatter.title} - {frontmatter.date}
      </h2>
    </a>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);

Project.defaultProps = {
  frontmatter: "",
  html: ""
};

Project.propTypes = {
  frontmatter: PropTypes.string,
  html: PropTypes.node
};

export default Project;
