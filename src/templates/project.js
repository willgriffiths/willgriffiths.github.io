/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import { Container, Section } from "../components/FlexGrid";
import Title from "../components/Title";
import Text from "../components/Text";

const ProjectTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <Container>
        <Section>
          <Title>{frontmatter.title}</Title>
          <Text>
            {frontmatter.date && `Year: ${frontmatter.date.slice(0, 4)}`}
          </Text>
          {frontmatter.industry && (
            <Text>Industry: {frontmatter.industry}</Text>
          )}
          {frontmatter.tech && <Text>Tech: {frontmatter.tech}</Text>}
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {frontmatter.image && (
            <div style={{ width: "100%", alignContent: "center" }}>
              <img
                src={frontmatter.image}
                alt={frontmatter.imageAlt}
                style={{
                  marginTop: "1rem",
                  maxHeight: "20rem",
                  height: "20rem"
                }}
              />
            </div>
          )}
        </Section>
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
        image
      }
    }
  }
`;
