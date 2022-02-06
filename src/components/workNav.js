import * as React from "react"
import { Link } from "gatsby"

const WorkNav = () => (
  <ul class="flex pb-10 pt-32">
    <li class="mr-6"><Link class="text-blue-500 hover:text-blue-800" to="/work/painting/">Painting</Link></li>
    <li class="mr-6"><Link class="text-blue-500 hover:text-blue-800" to="/work/3d/">3D</Link></li>
  </ul>
)

export default WorkNav
