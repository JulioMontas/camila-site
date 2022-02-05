import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Container from "../components/container";
import Header from "../components/header";


// markup
const IndexPage = ({data}) => {
  return (
    <Container>
    <title>Home Page</title>
    <Header />
      {data.slideShow.edges.map(({node}) => (
        <div key={node.ide}>
          <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} />
        </div>
      ))}
    </Container>
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
