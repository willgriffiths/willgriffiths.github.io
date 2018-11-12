/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "./Link";

const Text = styled.p`
  font-weight: 400;
  margin-bottom: 12px;
`;

const Container = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Project = ({ fields, frontmatter, html }) => (
  <Container>
    <Text>{frontmatter.date && frontmatter.date.slice(0, 4)}</Text>
    <Link to={fields.slug}>
      <Text>{frontmatter.title}</Text>
    </Link>
    {frontmatter.industry && <Text>Industry: {frontmatter.industry}</Text>}
    {frontmatter.tech && <Text>Tech: {frontmatter.tech}</Text>}
  </Container>
);

Project.defaultProps = {
  frontmatter: {},
  html: ""
};

Project.propTypes = {
  frontmatter: PropTypes.shape({}),
  html: PropTypes.node
};

export default Project;
