import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

function tours({data}) {
  return (
    <Layout>
      <StyledHero img={data.toursHero.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  query {
    toursHero: file(relativePath: { eq: "tours-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
