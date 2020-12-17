const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              date
            }
          }
        }
      }
    }
  `);
  const tagSet = new Set();

  result.data.allMarkdownRemark.edges.forEach((edge) => {
    
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: edge.node.fields.slug,
      },
    });

    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }
    tagSet.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: path.resolve(`./src/templates/tagged-post.js`),
        context: { tag }
      });
    });
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
      * During the build step, `@bugfender` will break because it relies on
      * browser-specific APIs. Fortunately, we don’t need it during the build.
      * Using Webpack’s null loader, we’re able to effectively ignore `@bugfender`
      * during the build. (See `src/utils/bugfender.js` to see how we prevent this
      * from breaking the app.)
      */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@bugfender/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
