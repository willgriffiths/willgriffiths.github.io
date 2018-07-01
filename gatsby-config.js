module.exports = {
  siteMetadata: {
    title: "Will Griffiths | Front End Developer Brisbane",
    author: "Will Griffiths",
    email: "thiswill@gmail.com",
    tagline: "Front end React developer building things in Brisbane Australia.",
    siteURL: "willgriffiths.github.io",
    githubUsername: "willgriffiths"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
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
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "source sans pro:400,700,600i" // you can also specify font weights and styles
        ]
      }
    }
  ]
};
