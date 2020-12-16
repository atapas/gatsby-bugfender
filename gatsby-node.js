/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

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
