import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-2.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  query MyQuery {
    fixed: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fixed(width: 490, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
function Images() {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="all-images">
      <article className="image">
        <h2>Imagine basic</h2>
        <img src={img} width="100%" />
      </article>
      <article className="image">
        <h2>Imagine fixed/blur</h2>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="image">
        <h2>Imagine fluid/svg</h2>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
