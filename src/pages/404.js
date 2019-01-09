import React from "react";
import Text from "../components/Text";
import Title from "../components/Title";
import { Container } from "../components/FlexGrid";
import Layout from "../layouts";

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Title>NOT FOUND</Title>
      <Text>This page doesn&apos;t exist... circle back and try again.</Text>
    </Container>
  </Layout>
);

export default NotFoundPage;
