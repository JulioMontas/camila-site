import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../../components/layout";
import Seo from "../../../components/seo"
import Container from "../../../components/container";
import WorkNav from "../../../components/workNav";

const PaintingPage = () => {
  return (
    <Layout>
    <Seo title="Painting" />
      <Container>
      <WorkNav />

      <div class="grid gap-10 grid-cols-1 mb-20 md:grid-cols-2">
        <StaticImage
          src="../../../images/painting/01-mari-con-su-mariposa.jpg"
          alt="Mari con Su Mariposa"
          placeholder="blurred"
          layout="CONSTRAINED"
        />
        <div class="-mt-7 md:-mt-0">
          <h2><b>Mari con Su Mariposa <i>(Mari with her butterfly)</i></b></h2>
          <h3>2021</h3>
          <p>12 x 9 in.</p>
          <p>Acrylic on canvas</p>
        </div>
      </div>

      <div class="grid gap-10 grid-cols-1 mb-20 md:grid-cols-2">
        <StaticImage
          src="../../../images/painting/02-hablando-con-el-mar.jpeg"
          alt="Hablando Con El Mar"
          placeholder="blurred"
          layout="CONSTRAINED"
        />
        <div class="-mt-7 md:-mt-0">
          <h2><b>Hablando Con El Mar <i>(Talking with the ocean)</i></b></h2>
          <h3>2021</h3>
          <p>30 x 24 in.</p>
          <p>Acrylic on canvas</p>
        </div>
      </div>

      <div class="grid gap-10 grid-cols-1 mb-20 md:grid-cols-2">
        <StaticImage
          src="../../../images/painting/03-pidiendo-deseos-de-flores.jpg"
          alt="Pidiendo Deseos de Flores"
          placeholder="blurred"
          layout="CONSTRAINED"
        />
        <div class="-mt-7 md:-mt-0">
          <h2><b>Pidiendo Deseos de Flores <i>(Making wishes on flowers)</i></b></h2>
          <h3>2021</h3>
          <p>10 x 8 in.</p>
          <p>Watercolor on paper mounted on wood panel</p>
        </div>
      </div>

      <div class="grid gap-10 grid-cols-1 mb-20 md:grid-cols-2">
        <StaticImage
          src="../../../images/painting/04-saludando-al-sol.jpg"
          alt="Saludando Al Sol"
          placeholder="blurred"
          layout="CONSTRAINED"
        />
        <div class="-mt-7 md:-mt-0">
          <h2><b>Saludando Al Sol <i>(Greeting the sun)</i></b></h2>
          <h3>2021</h3>
          <p>10 x 8 in.</p>
          <p>Watercolor on paper mounted on wood panel</p>
        </div>
      </div>

      <div class="grid gap-10 grid-cols-1 mb-20 md:grid-cols-2">
        <StaticImage
          src="../../../images/painting/05-florecita.jpg"
          alt="Florecita"
          placeholder="blurred"
          layout="CONSTRAINED"
        />
        <div class="-mt-7 md:-mt-0">
          <h2><b>Florecita <i>(Little Flower)</i></b></h2>
          <h3>2021</h3>
          <p>10 x 8 in.</p>
          <p>Watercolor on paper mounted on wood panel</p>
        </div>
      </div>

      <div class="grid gap-10 grid-cols-1 mb-20 md:grid-cols-2">
        <StaticImage
          src="../../../images/painting/06-las-hemanitas-azul.jpg"
          alt="Las Hemanitas (Azul)"
          placeholder="blurred"
          layout="CONSTRAINED"
        />
        <div class="-mt-7 md:-mt-0">
          <h2><b>Las Hemanitas (Azul) <i>The Sisters (on blue)</i></b></h2>
          <h3>2021</h3>
          <p>30 x 24 in.</p>
          <p>Acrylic on canvas</p>
        </div>
      </div>

      <div class="grid gap-10 grid-cols-1 mb-20 md:grid-cols-2">
        <StaticImage
          src="../../../images/painting/07-las-gemelas-coquetas.jpg"
          alt="Las Gemelas Coquetas"
          placeholder="blurred"
          layout="CONSTRAINED"
        />
        <div class="-mt-7 md:-mt-0">
          <h2><b>Las Gemelas Coquetas <i>The Flirty Twins</i></b></h2>
          <h3>2022</h3>
          <p>4 x 10 in.</p>
          <p>Watercolor on paper</p>
        </div>
      </div>

      <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
        <StaticImage
          src="../../../images/painting/08-lagartija-azul.jpg"
          alt="Lagartija Azul"
          placeholder="blurred"
          layout="CONSTRAINED"
        />
        <div class="-mt-7 md:-mt-0">
          <h2><b>Lagartija Azul <i>(Blue Lizard)</i></b></h2>
          <h3>2021</h3>
          <p>12 x 9 in.</p>
          <p>Acrylic on canvas</p>
        </div>
      </div>

      </Container>
    </Layout>
  )
}

export default PaintingPage
