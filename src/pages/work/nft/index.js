import * as React from "react"
import Layout from "../../../components/layout";
import Seo from "../../../components/seo"
import Container from "../../../components/container";
import WorkNav from "../../../components/workNav";

const NFTPage = ({data}) => {
  return (
    <Layout>
    <Seo title="NFTs" />
      <Container>
        <WorkNav />
      </Container>
    </Layout>
  )
}

export default NFTPage
