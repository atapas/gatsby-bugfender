import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import GatsbyBugfender from '../utils/bugfender'

import PostList from '../components/PostList'

GatsbyBugfender.init({
  appKey: 'VocUSyztliDe9H98ZowwQEoOfqObXfRR',
});

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="All Posts" />
    <PostList data={data} />
  </Layout>
)

export default IndexPage

export const GET_ALL_POSTS = graphql`
  {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      ){
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date(formatString: "DD MMMM, YYYY")
            author
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
