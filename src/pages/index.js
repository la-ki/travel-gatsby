import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About";
import Services from '../components/Home/Services';
import StyledHero from '../components/StyledHero';
import {graphql} from 'gatsby';

export default ({data}) => (
    <Layout>
      <StyledHero home="true" img={data.homeHero.childImageSharp.fluid}>
        <Banner
          title="peek into backroads"
          info="We believe that traveling under your own power and at your own pace opens up an opportunity to connect more meaningfully with the world."
        >
        <AniLink fade to="/tours" className="btn-white">explore more</AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
)

export const query = graphql`
query {
  homeHero: file(relativePath: {eq: "hero-img.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
