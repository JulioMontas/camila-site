import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Seo from "../components/seo"

const IndexPage = ({data}) => {
  return (
    <Layout>
    <Seo title="Home" />
      {data.slideShow.edges.map(({node}) => (
        <div key={node.ide}>
          <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} />
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    slideShow: allFile(
      filter: {relativeDirectory: {eq: "bg"}}
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
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`
