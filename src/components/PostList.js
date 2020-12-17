import React from "react"
import TagCapsules from "./TagCapsules"
import { Link } from "gatsby"
import { User } from 'react-feather'

const Post = props => (
  <div>
    <Link 
        to={props.details.fields.slug}
        style={{textDecoration: 'none', color: '#000000',fontWeight: '600', fontSize: '25px'}}>
        {props.details.frontmatter.title}
    </Link>
    <div>
      <User color='purple' size={16} />{' '}<span>{props.details.frontmatter.author}</span>
      {", "}
      <span>on {props.details.frontmatter.date}</span>
    </div>
    <p>{props.details.excerpt}</p>
    <TagCapsules tags={props.details.frontmatter.tags} />
  </div>
)

export default (props) => {
  let posts = props.data.allMarkdownRemark.edges
  return (
    <div>
      {posts.map((post, index) => (
        <Post details={post.node} key={post.node.id} />
      ))}
    </div>
  )
}

