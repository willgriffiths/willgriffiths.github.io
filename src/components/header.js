import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-primitives";
import styled from "styled-components/primitives";
import { siteMetadata } from "../../gatsby-config";

const Container = styled.View`
  border: red;
`;

const Header = ({ siteTitle, siteTagline }) => (
  <Container>
    <View accessibilityRole="banner">
      <Text accessibilityRole="heading">{siteTitle}</Text>
      <Text accessibilityRole="heading" aria-level="2">
        {siteTagline}
      </Text>
    </View>
  </Container>
);

Header.defaultProps = {
  siteTitle: siteMetadata.title,
  siteTagline: siteMetadata.tagline
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteTagline: PropTypes.string
};

export default Header;
