import React from "react";
import styled from "styled-components";
import { Section } from "./FlexGrid";

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   min-height: 600px
//   margin-bottom: 200px;
//   padding-left: 20px;
//   padding-right: 20px;
//   @media (min-width: 920px) {
//     padding-left: 140px;
//     padding-right: 140px;
//     margin-bottom: 300px
//   }
// `;

const Headline = styled.h1`
  font-size: 2rem;
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
