import React from "react";
import styled from "styled-components";
import { Section } from "./FlexGrid";
import theme from "../styles/colors";

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`;

const Tagline = Headline.withComponent("h2");

const FeatureSpan = styled.span`
  position: relative;
  background: ${theme.featureGradientTilted};
  -webkit-background-clip: text;
  background-clip: text;
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
  <Section>
    <HeroText>
      <Headline accessibilityRole="heading" aria-level="2">
        Hi, I&#39;m Will Griffiths.
      </Headline>
      <Tagline accessibilityRole="heading" aria-level="2">
        I&#39;m a <FeatureSpan>front-end developer</FeatureSpan> from Brisbane,
        Australia.
      </Tagline>
    </HeroText>
  </Section>
);

export default Hero;
