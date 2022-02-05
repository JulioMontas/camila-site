import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layout";
import Seo from "../../../components/seo"
import Container from "../../../components/container";
import WorkNav from "../../../components/workNav";

const NFTPage = () => {
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
