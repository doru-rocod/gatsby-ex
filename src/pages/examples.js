import React from "react"
import Header from "../examples/Header"
import Layout from "../components/layout"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  // const {
  //   site: {
  //     info: { author },
  //   },
  // } = data

  return (
    <Layout>
      <p>This is the examples page!</p>
      <Header />
      <HeaderStatic />
      <h5>ayhor: {data.site.info.author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
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

export default examples
