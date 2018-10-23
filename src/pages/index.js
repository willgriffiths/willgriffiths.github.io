import React from "react";
import styled from "styled-components";

const ContactLink = styled.a`
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

const Title = styled.h2`
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 32px;
  font-size: 32px;
  font-weight: 400;
`;

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1050px) {
    padding: 0 140px;
    margin-bottom: 100px;
  }
`;

const Section = styled.section`
  margin-bottom: 58px;
`;

const IndexPage = () => (
  <Container>
    <Section>
      <Title id="work">Work</Title>
      <Text>Frontend Developer</Text>
      <Text>Fusion Sport</Text>
      <Text>Human Performance Framework</Text>
      <Text>&nbsp;</Text>
      <Text>Product Owner and Sales</Text>
      <Text>Lunar Logic</Text>
      <Text>Agile Software House</Text>
    </Section>
    <Section>
      <Title id="focus">Focus</Title>
      <Text>
        Making this site less{" "}
        <span role="img" aria-label="crappy">
          💩
        </span>
      </Text>
    </Section>
    <Section>
      <Title id="projects">Projects</Title>
      <Text>OCR Image Renaming Tool</Text>
      <Text>Industry: Lab Tech</Text>
      <Text>Libraries: Electron, React, Tesseract, Sharp, Electron Builder</Text>
    </Section>
    <Section>
      <Title id="short">Quick tips</Title>
      <Text>VS Code - insert sequence</Text>
      <Text>VS Code - toggleFind</Text>
    </Section>
    <Section>
      <Title id="tech">What I do</Title>
      <Text>Javascript</Text>
      <Text>React</Text>
      <Text>HTML/CSS</Text>
      <Text>Mobx and Mobx State Tree</Text>
      <Text>React Native</Text>
      <Text>Electron</Text>
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
      <ContactLink href="mailto:thiswill@gmail.com">thiswill@gmail.com</ContactLink>
      <ContactLink href="https://github.com/willgriffiths">github.com/willgriffiths</ContactLink>
      <ContactLink href="https://linkedin.com/in/williamgriffiths">
        linkedin.com/in/williamgriffiths
      </ContactLink>
    </Section>
  </Container>
);

export default IndexPage;
