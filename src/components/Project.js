/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "./Link";
import Text from "./Text";
import theme from "../styles/colors";

const Container = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContrastText = styled(Text)`
  color: ${theme.foregroundAccent};
`.withComponent("span");

const ProjectLink = styled(Link)`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Project = ({ fields, frontmatter, html }) => (
  <Container>
    <Text>{frontmatter.date && frontmatter.date.slice(0, 4)}</Text>
    <ProjectLink to={fields.slug}>{frontmatter.title}</ProjectLink>
    {frontmatter.industry && (
      <Text>
        <ContrastText>Industry:</ContrastText> {frontmatter.industry}
      </Text>
    )}
    {frontmatter.tech && (
      <Text>
        <ContrastText>Tech:</ContrastText> {frontmatter.tech}
      </Text>
    )}
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
