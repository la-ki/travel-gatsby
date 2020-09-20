import React from 'react';
import StyledHero from '../components/StyledHero';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';

function contact({data}) {
    return (
        <Layout>
            <StyledHero img={data.contactHero.childImageSharp.fluid} />
        </Layout>
    )
}

export const query = graphql`
query {
  contactHero: file(relativePath: {eq: "contact-hero.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default contact
