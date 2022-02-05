import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layout";
import Seo from "../../../components/seo"
import Container from "../../../components/container";
import WorkNav from "../../../components/workNav";

const DrawingPage = () => {
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
