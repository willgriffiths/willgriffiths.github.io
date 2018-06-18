import React from "react";
import PropTypes from "prop-types";
import Project from "../components/Project";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Projects = edges.map((edge) => (
    <Project key={edge.node.path} frontmatter={edge.node.frontmatter} html={edge.node.html} />
  ));

  return <div>{Projects}</div>;
};

IndexPage.defaultProps = {
  data: {}
};

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({ allMarkdownRemark: PropTypes.object }))
};

export default IndexPage;

export const pageQuery = graphql`
  query AllProjects {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
          html
        }
      }
    }
  }
`;
