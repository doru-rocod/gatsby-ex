import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query MyFirstQuery {
    site {
      info: siteMetadata {
        data
        description
        person {
          name
          age
        }
        title
      }
    }
  }
`
function Header() {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>name: {name}</h1>
      <h1>title: {title}</h1>
    </div>
  )
}

export default Header
