import * as React from "react"
import Layout from "../../../components/layout";
import Seo from "../../../components/seo"
import Container from "../../../components/container";
import WorkNav from "../../../components/workNav";

const DrawingPage = ({data}) => {
  return (
    <Layout>
    <Seo title="Drawing" />
      <Container>
        <WorkNav />
      </Container>
    </Layout>
  )
}

export default DrawingPage
