import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
  color: white;
  display: block;
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 12px;
  margin-top: 0;
`;

const Container = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Project = ({ frontmatter, html }) => (
  <Container>
    <Text>{frontmatter.date.slice(0, 4)}</Text>
    <Link href={frontmatter.path}>
      <Text>{frontmatter.title}</Text>
    </Link>
    {frontmatter.industry && <Text>Industry: {frontmatter.industry}</Text>}
    {frontmatter.tech && <Text>Tech: {frontmatter.tech}</Text>}
    <div dangerouslySetInnerHTML={{ __html: html }} />
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
