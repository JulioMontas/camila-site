import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../../components/layout";
import Seo from "../../../components/seo"
import Container from "../../../components/container";
import WorkNav from "../../../components/workNav";

// markup
const PaintingPage = ({data}) => {
  return (
    <Layout>
    <Seo title="Painting" />
      <Container>
      <WorkNav />
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
        {data.slideShow.edges.map(({node}) => (
          <p key={node.ide}>
            <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} />
          </p>
        ))}
      </div>
      </Container>
    </Layout>
  )
}

export default PaintingPage

export const pageQuery = graphql`
  query {
    slideShow: allFile(
      filter: {relativeDirectory: {eq: "painting"}}
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.1
              placeholder: BLURRED
              quality: 70
              blurredOptions: {width: 100}
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`
