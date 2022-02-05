import * as React from "react"
import { Link,graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Container from "../../../components/container";
import Header from "../../../components/header";

// markup
const ThreeDPage = ({data}) => {
  return (
    <Container>
      <title>3D</title>
      <Header />
      <div>
        <ul class="flex">
          <li class="mr-6">
            <Link class="text-blue-500 hover:text-blue-800" to="/work/painting">Painting</Link>
          </li>
          <li class="mr-6">
            <Link class="text-blue-500 hover:text-blue-800 font-bold" to="/work/3d">3D</Link>
          </li>
        </ul>
      </div>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-1">
        {data.slideShow.edges.map(({node}) => (
          <p key={node.ide}>
            <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} />
          </p>
        ))}
      </div>
    </Container>
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
