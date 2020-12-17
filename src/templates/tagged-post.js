import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostList from '../components/PostList';

export default ({data}) => {
    console.log(data);
    return (
      <Layout>
        <div>
          <PostList data={data} />
        </div>
      </Layout>
    )
};

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`