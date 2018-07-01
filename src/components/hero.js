import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 600px
  padding: 0 20px;
  @media (min-width: 1050px) {
    padding: 0 140px;
  }
`;

const Headline = styled.h1`
  font-size: 48px;
  font-weight: 400;
`;

const Tagline = Headline.withComponent("h2");

const FeatureSpan = styled.span`
  position: relative;
  background: linear-gradient(137.5deg, #e54230, #a22ae5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const HeroText = styled.div`
  flex: 1;
  padding: 20px 0;
  max-width: 900px;
  vertical-align: middle;
`;

const Hero = () => (
  <Container>
    <HeroText>
      <Headline accessibilityRole="heading" aria-level="2">
        Hi, I&#39;m Will Griffiths.
      </Headline>
      <Tagline accessibilityRole="heading" aria-level="2">
        I&#39;m a <FeatureSpan>front-end developer</FeatureSpan> and this is where I put my stuff.
      </Tagline>
    </HeroText>
  </Container>
);

export default Hero;
