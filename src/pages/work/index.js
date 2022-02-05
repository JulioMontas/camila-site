import * as React from "react"
import Layout from "../../components/layout";
import Seo from "../../components/seo"
import Container from "../../components/container";
import WorkNav from "../../components/workNav";

// markup
const WorkPage = () => {
  return (
    <Layout>
    <Seo title="Work" />
      <Container>
        <WorkNav />
      </Container>
    </Layout>
  )
}

export default WorkPage
