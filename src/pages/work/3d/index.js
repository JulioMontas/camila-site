import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../../../components/container";
import Header from "../../../components/header";

// markup
const ThreeDPage = () => {
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

      <div class="grid gap-4 grid-cols-1 md:grid-cols-2">

      <StaticImage
        src="../../../images/DSC05078.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
        width={1758}
        height={989}
        aspectRatio={16/9}
      />

      <StaticImage
        src="../../../images/DSC05052.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
        width={1758}
        height={989}
        aspectRatio={16/9}
      />

      <StaticImage
        src="../../../images/DSC05057.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
        width={1078}
        height={739}
        aspectRatio={16/9}
      />

      <StaticImage
        src="../../../images/VillaZertuche_Camila_02.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
        width={1889}
        height={1063}
        aspectRatio={16/9}
      />

      <StaticImage
        src="../../../images/VillaZertuche_Camila_06.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
        width={1828}
        height={1028}
        aspectRatio={16/9}
      />
      </div>

    </Container>
  )
}

export default ThreeDPage
