import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import Header from "../components/header";
import Hero from "../components/hero";
import "./index.css";
import "../app.css";
import config from "../../gatsby-config";
import { background, foreground } from "../theme/colors";

const Body = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${background};
  color: ${foreground};
`;

const Layout = ({ children, data }) => (
  <Body>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: data.site.siteMetadata.tagline },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} siteTagline={data.site.siteMetadata.tagline} />
    <Hero />
    <div>{children()}</div>
  </Body>
);

Layout.defaultProps = {
  children: <div />,
  data: config
};

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  })
};

export default Layout;

/*   global graphql */
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        tagline
        author
        email
        githubUsername
      }
    }
  }
`;
