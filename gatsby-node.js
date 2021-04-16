var
  fs = require('fs'),
  path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

console.log('end', process.env.NODE_ENV)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions


// 3t0pwYmEBxvCykiqoJbMVG

  /*
    #####
    Homepage
    #####
  */
  const homeTemplate = path.resolve('src/Templates/home.js')
  createPage({
    path: `${'/fr/'}`,
    component: homeTemplate,
    context: {
      // slug: edge.node.slug,
      contentfulID: '3t0pwYmEBxvCykiqoJbMVG',
      locale: 'fr'
    }
  });

    /*
    #####
    Homepage
    #####
  */
    const accountTemplate = path.resolve('src/Templates/account.js')
    createPage({
      path: `${'/fr/compte'}`,
      component: accountTemplate,
      context: {
        // slug: edge.node.slug,
        // contentfulID: '3t0pwYmEBxvCykiqoJbMVG',
        locale: 'fr'
      }
    });

  /*
    #####
    Univers
    #####
  */
    const universTemplate = path.resolve('src/Templates/univers.js')
    const univers = graphql(`
    {
      allUnivers:allContentfulUnivers{
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
      // Create univers pages
      const allUnivers = result.data.allUnivers.edges;
      allUnivers.forEach((edge) => {
        createPage({
          path: `${edge.node.node_locale}${edge.node.slug}`,
          component: universTemplate,
          context: {
            slug: edge.node.slug,
            contentfulID: edge.node.contentful_id,
            locale: edge.node.node_locale
          }
        });
      });
    });


  /*
    #####
    CATEGORY
    #####
  */
    const categoryTemplate = path.resolve('src/Templates/category.js')
    const categories = graphql(`
    {
      allCategories:allContentfulCategory{
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
      // Create univers pages
      const allCategories = result.data.allCategories.edges;
      allCategories.forEach((edge) => {
        createPage({
          path: `${edge.node.node_locale}${edge.node.slug}`,
          component: categoryTemplate,
          context: {
            slug: edge.node.slug,
            contentfulID: edge.node.contentful_id,
            locale: edge.node.node_locale
          }
        });
      });
    });





  /*
    #####
    VARIANTS
    #####
  */
    const variantTemplate = path.resolve('src/Templates/variant.js')
    const variants = graphql(`
    {
      allVariants:allContentfulVariant{
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
      // Create univers pages
      const allVariants = result.data.allVariants.edges;
      allVariants.forEach((edge) => {
        createPage({
          path: `${edge.node.node_locale}${edge.node.slug}`,
          component: variantTemplate,
          context: {
            slug: edge.node.slug,
            contentfulID: edge.node.contentful_id,
            locale: edge.node.node_locale
          }
        });
      });
    });
  
  
  
  



  /*
    #####
    PRODUCTS
    #####
  */
  const productTemplate = path.resolve('src/Templates/product.js')
  const products = graphql(`
  {
    allProducts:allContentfulProduct{
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
    // Create univers pages
    const allProducts = result.data.allProducts.edges;
    allProducts.forEach((edge) => {
      createPage({
        path: `${edge.node.node_locale}${edge.node.slug}`,
        component: productTemplate,
        context: {
          slug: edge.node.slug,
          contentfulID: edge.node.contentful_id,
          locale: edge.node.node_locale
        }
      });
    });
  });



    /*
    #####
    EDITORS
    #####
  */
    const editorTemplate = path.resolve('src/Templates/editor.js')
    const editors = graphql(`
    {
      allEditors:allContentfulEditor{
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
      // Create univers pages
      const allEditors = result.data.allEditors.edges;
      allEditors.forEach((edge) => {
        createPage({
          path: `${edge.node.node_locale}${edge.node.slug}`,
          component: editorTemplate,
          context: {
            slug: edge.node.slug,
            contentfulID: edge.node.contentful_id,
            locale: edge.node.node_locale
          }
        });
      });
    });



  

  return Promise.all([
    // homepage,
    univers,
    categories,
    variants,
    products
  ]);

}