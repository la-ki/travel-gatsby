import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"

export default () => (
  <>
    <Layout>
      <Hero>
        <Banner
          title="jeep backroads"
          info="We believe that traveling under your own power and at your own pace opens up an opportunity to connect more meaningfully with the world."
        >
        <Link to="/tours" className="btn-white">explore more</Link>
        </Banner>
      </Hero>
    </Layout>
  </>
)
