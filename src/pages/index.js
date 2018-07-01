import React from "react";
import styled from "styled-components";
import { secondary } from "../theme/colors";

const ContactLink = styled.p`
  font-size: 64px;
  color: white;
  font-weight: 600;
  font-style: italic;
  line-height: 1.1;
  text-decoration: none;
  letter-spacing: 1.5px;
`;

const Title = styled.h2`
 text-decoration: none;
  padding: 20px 30px;
  font-size: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: ${secondary};
  border-image: linear-gradient(137.5deg, #e54230, #a22ae5);
  border-image-slice: 1;
  border-image-width: 1;
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

const MarginBottom = styled.div`
  margin-bottom: 12px;
`;


const IndexPage = () => (
  <Container>
    <MarginBottom><Title id="contact">Contact</Title></MarginBottom>
    <ContactLink>thiswill@gmail.com</ContactLink>
    <ContactLink>github.com/willgriffiths</ContactLink>
    <ContactLink>linkedin.com/in/williamgriffiths/</ContactLink>
  </Container>
);

export default IndexPage;
