import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import Header from "../components/header";
import CoreCSS from "./CoreCSS";
import Normalize from "./Normalize";
import favicon from "../Favicon.png";

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
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: data.site.siteMetadata.tagline },
            { name: "keywords", content: "sample, something" }
          ]}
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${favicon}` }
          ]}
        />
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteTagline={data.site.siteMetadata.tagline}
        />
        <CoreCSS />
        <Normalize />
        {children}
      </React.Fragment>
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
