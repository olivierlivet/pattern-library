var
  fs = require('fs'),
  path = require('path');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

console.log('end', process.env.NODE_ENV)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    // Return a Promise which would wait for both the queries to resolve
    const patternTemplate = path.resolve('src/Templates/pattern.js')

    const patterns = graphql(`
  {
    allPatterns:allContentfulPattern{
      edges {
        node {
          node_locale
          contentful_id
          slug
          #name
        }
      }
    }
  }
  `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }
        console.log(result)

        // Create univers pages
        const allPatterns = result.data.allPatterns.edges;

        console.log(allPatterns)


        allPatterns.forEach((edge) => {
            createPage({
                path: `${edge.node.slug}`,
                component: patternTemplate,
                context: {
                    slug: edge.node.slug,
                    contentfulID: edge.node.contentful_id,
                    locale:edge.node.node_locale
                }
            });
        });
    });

    return Promise.all([
        patterns
    ]);

}