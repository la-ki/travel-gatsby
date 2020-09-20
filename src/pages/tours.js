import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

function tours({data}) {
  return (
    <Layout>
      <StyledHero />
    </Layout>
  )
}

export const query = graphql`
  query {
    homeHero: file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
