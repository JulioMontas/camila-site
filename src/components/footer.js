import * as React from "react"
import Container from "./container";

const Footer = () => (
  <Container>
    <p class="pb-10 pt-10 text-center text-gray-500 text-xs z6">
       © {new Date().getFullYear()} Camila Villa Zertuche. All Rights Reserved.
    </p>
  </Container>
)

export default Footer
