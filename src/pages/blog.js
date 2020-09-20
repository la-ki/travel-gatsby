import React from 'react';
import StyledHero from '../components/StyledHero';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';

function blog({data}) {
    return (
        <Layout>
            <StyledHero img={data.blogHero.childImageSharp.fluid} />
        </Layout>
    )
}

export const query = graphql`
query {
  blogHero: file(relativePath: {eq: "blog-hero.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default blog
