import * as React from "react"
import { Link } from "gatsby"
import Container from "../../components/container";
import Header from "../../components/header";

// markup
const WorkPage = () => {
  return (
    <Container>
      <title>Work</title>
      <Header />
      <div>
        <ul class="flex">
          <li class="mr-6">
            <Link class="text-blue-500 hover:text-blue-800" to="/work/painting">Painting</Link>
          </li>
          <li class="mr-6">
            <Link class="text-blue-500 hover:text-blue-800" to="/work/3d">3D</Link>
          </li>
        </ul>
      </div>

    </Container>
  )
}

export default WorkPage
