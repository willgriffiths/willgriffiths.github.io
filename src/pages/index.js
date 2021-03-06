/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Project from "../components/Project";
import Layout from "../layouts";
import Hero from "../components/Hero";
import Text from "../components/Text";
import Title from "../components/Title";

import { Container, Section } from "../components/FlexGrid";

const ContactLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  color: white;
  display: block;
  margin-bottom: 12px;
`;

const IndexPage = ({ data }) => {
  const { ProjectsData } = data;
  return (
    <Layout>
      <Container>
        <Hero />
        <Section>
          <Title id="work">Work</Title>
          <Text>Frontend Developer</Text>
          <Text>Fusion Sport</Text>
          <Text>Building the Human Performance Framework</Text>
        </Section>
        <Section>
          <Title id="now">What am I doing now?</Title>
          <Text>Getting to know my newborn daughter.</Text>
        </Section>
        <Section>
          <Title id="projects">Side stuff</Title>
          <Projects edges={ProjectsData.edges} />
        </Section>
        <Section>
          <Title id="tech">What I do</Title>
          <Text>Javascript</Text>
          <Text>React</Text>
          <Text>HTML/CSS</Text>
          <Text>Mobx and Mobx State Tree</Text>
          <Text>React Native</Text>
          <Text>Electron</Text>
          <Text>Gatsby ;)</Text>
          <Text>Jest</Text>
          <Text>Eslint and Prettier</Text>
          <Text>Circle CI</Text>
          <Text>Git</Text>
        </Section>
        <Section>
          <Title id="tools">Tools I love</Title>
          <Text>VS Code</Text>
          <Text>iTerm2</Text>
          <Text>Alfred</Text>
          <Text>Figma</Text>
          <Text>Karabiner-Elements</Text>
          <Text>nvAlt</Text>
          <Text>Spectacle</Text>
          <Text>Spotify</Text>
          <Text>Taurine</Text>
          <Text>Oh My Zsh</Text>
          <Text>Meslo LG M DZ for Powerline</Text>
          <Text>Antigen</Text>
          <Text>Spaceship ZSH Theme</Text>
        </Section>
        <Section>
          <Title id="contact">Contact</Title>
          <ContactLink href="mailto:thiswill@gmail.com">
            thiswill@gmail.com
          </ContactLink>
          <ContactLink href="https://github.com/willgriffiths">
            github.com/willgriffiths
          </ContactLink>
          <ContactLink href="https://linkedin.com/in/williamgriffiths">
            linkedin.com/in/williamgriffiths
          </ContactLink>
        </Section>
      </Container>
    </Layout>
  );
};

export default IndexPage;

const Projects = ({ edges }) =>
  edges && (
    <div>
      {edges.map((edge) => (
        <Project
          fields={edge.node.fields}
          frontmatter={edge.node.frontmatter}
          html={edge.node.html}
        />
      ))}
    </div>
  );

export const pageQuery = graphql`
  query Index {
    ProjectsData: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { glob: "**/projects/**" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            industry
            tech
          }
          tableOfContents
          wordCount {
            paragraphs
            sentences
            words
          }
          timeToRead
        }
      }
    }
  }
`;
