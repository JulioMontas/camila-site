import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../../../components/container";
import Header from "../../../components/header";

// markup
const PaintingPage = () => {
  return (
    <Container>
      <title>Painting</title>
      <Header />
      <div>
        <ul class="flex">
          <li class="mr-6">
            <Link class="text-blue-500 hover:text-blue-800 font-bold" to="/work/painting">Painting</Link>
          </li>
          <li class="mr-6">
            <Link class="text-blue-500 hover:text-blue-800" to="/work/3d">3D</Link>
          </li>
        </ul>
      </div>

      <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
        <StaticImage
          src="../images/IMG_2084.jpg"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
          width={1513}
          height={2400}
          aspectRatio={16/9}
        />

        <StaticImage
          src="../images/IMG_2257.JPG"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
          width={3842}
          height={2401}
        />
      </div>
    </Container>
  )
}

export default PaintingPage
