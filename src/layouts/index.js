import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/header";
import "./index.css";
import config from "../../gatsby-config";
import Footer from "../components/footer";

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} siteTagline={data.site.siteMetadata.tagline} />
    <div>{children()}</div>
    <Footer
      author={data.site.siteMetadata.author}
      email={data.site.siteMetadata.email}
      githubUsername={data.site.siteMetadata.githubUsername}
    />
  </div>
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
