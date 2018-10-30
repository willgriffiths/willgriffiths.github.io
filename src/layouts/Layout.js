import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Header from "../components/header";
import "./Layout.css";
import "../App.css";
import theme from "../theme/colors";

const Body = styled.div`
  height: 100%;
  background: ${theme.background};
  color: ${theme.foreground};
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => (
      <Body>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: data.site.siteMetadata.tagline },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteTagline={data.site.siteMetadata.tagline}
        />
        {children}
      </Body>
    )}
  />
);

Layout.defaultProps = {
  children: <div />
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
