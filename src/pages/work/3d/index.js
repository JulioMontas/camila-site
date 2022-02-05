import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
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

        <div class="pb-20">
         <p class="prose-lg">The Flor Seats are a recent exploration into the world of design. They are a play on the Spanish word Flor (Flower) and the English word Floor. Playing in Spanglish, Camila’s childhood in Miami influences the way she finds opportunities for understanding and connection outside of official languages. These Flor seats become a place where one can physically and conceptually rest between cultures. The playful colors and shapes of the seats are an allusion both to the girly commodified identity that came with growing up in a “Limited Too” pop culture obsessed America, but also the vibrant visuals found in looking at both modern and ancient Mexican culture. They are both soft and sturdy as they are made from recycled high density foam and dyed cotton fabric. The flowers are cut, stitched and hand dyed in Camila’s New York City Studio. The Flor Seats were included in the 2021 exhibition “Primero Quieren Tu Azucar Y Luego Se Empalagan” at Cooper Union's 41 Cooper Gallery in New York City.</p>
        </div>

        <div class="grid gap-10 grid-cols-1 mb-20 md:grid-cols-2">
          <StaticImage
            src="../../../images/3d/VillaZertuche_Camila_02.JPG"
            alt="Mari con Su Mariposa"
            placeholder="blurred"
            layout="CONSTRAINED"
          />
          <div class="-mt-7 md:-mt-0">
            <h2><b> Pixel Flor Seat      </b></h2>
          </div>
        </div>

        <div class="grid gap-10 grid-cols-1 mb-20 md:grid-cols-2">
          <StaticImage
            src="../../../images/3d/DSC05078.JPG"
            alt="Mari con Su Mariposa"
            placeholder="blurred"
            layout="CONSTRAINED"
          />
          <div class="-mt-7 md:-mt-0">
            <h2><b>   Installation view of "Primero Quieren Tu Azucar Y Luego Se Empalagan"    </b></h2>
          </div>
        </div>


        <div class="grid gap-10 grid-cols-1 mb-20 md:grid-cols-2">
          <StaticImage
            src="../../../images/3d/VillaZertuche_Camila_06.JPG"
            alt="Mari con Su Mariposa"
            placeholder="blurred"
            layout="CONSTRAINED"
          />
          <div class="-mt-7 md:-mt-0">
            <h2><b>    Zarape Flor Seat   </b></h2>
          </div>
        </div>


      </Container>
    </Layout>
  )
}

export default ThreeDPage
