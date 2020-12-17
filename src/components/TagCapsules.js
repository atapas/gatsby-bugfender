import React from "react"
import _ from "lodash"
import { Link } from "gatsby"

import GatsbyBugfender from '../utils/bugfender'

import styles from "./TagCapsules.module.css"

const Tag = props => {
  const tag = props.tag
  GatsbyBugfender.log(`Recieved Tag ${tag}`)

  return (
    <li>
      <Link className={styles.tag} to={`/tags/${_.kebabCase(tag)}`}>
        {tag}
      </Link>
    </li>
  )
}

const Tagcapsules = props => {
  const tags = props.tags
  GatsbyBugfender.log(`Recieved ${tags.length} tags`)
  return (
    <ul className={styles.tags}>
      {tags && tags.map(tag => <Tag tag={tag} key={tag} />)}
    </ul>
  )
}

export default Tagcapsules
