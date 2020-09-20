import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from '../../images/about-us.jpg';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "about-us.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

function About() {
     
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum
            eos id, rerum officiis repellendus enim rem atque voluptatum
            exercitationem suscipit autem officia delectus quos illum quidem
            provident. Voluptatibus, necessitatibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum
            eos id, rerum officiis repellendus enim rem atque voluptatum
            exercitationem suscipit autem officia delectus quos illum quidem
            provident. Voluptatibus, necessitatibus?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
