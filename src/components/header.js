import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { siteMetadata } from "../../gatsby-config";

const Header = ({ siteTitle, siteTagline }) => (
  <View accessibilityRole="banner">
    <Text accessibilityRole="heading">{siteTitle}</Text>
    <Text accessibilityRole="heading" aria-level="2">
      {siteTagline}
    </Text>
  </View>
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
