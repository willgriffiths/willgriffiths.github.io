module.exports = {
  siteMetadata: {
    title: "Will Griffiths Code Playground",
    author: "Will Griffiths",
    email: "thiswill@gmail.com",
    tagline: "A place to stick my code",
    siteURL: "willgriffiths.github.io",
    githubUsername: "willgriffiths"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages"
      }
    },
    "gatsby-transformer-remark"
  ]
};
