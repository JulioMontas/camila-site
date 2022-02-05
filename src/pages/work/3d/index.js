import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../../components/layout";
import Seo from "../../../components/seo"
import Container from "../../../components/container";
import WorkNav from "../../../components/workNav";

const ThreeDPage = ({data}) => {
  return (
    <Layout>
    <Seo title="3D" />
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

export default ThreeDPage

export const pageQuery = graphql`
  query {
    slideShow: allFile(
      filter: {relativeDirectory: {eq: "3d"}}
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
