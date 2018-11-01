/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../layouts";
import Container from "../components/Container";

const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 12px;
  margin-top: 0;
`;

const ProjectTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <Container>
        <Text>{frontmatter.date && frontmatter.date.slice(0, 4)}</Text>
        <Text>{frontmatter.title}</Text>
        {frontmatter.industry && <Text>Industry: {frontmatter.industry}</Text>}
        {frontmatter.tech && <Text>Tech: {frontmatter.tech}</Text>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        industry
        tech
      }
    }
  }
`;
