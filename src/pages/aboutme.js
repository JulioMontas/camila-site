import * as React from "react"
import Container from "../components/container";
import Header from "../components/header";

// markup
const AboutMe = () => {
  return (
    <Container>
      <title>About Me</title>
      <Header />
      <article class="prose md:prose-xl">
        <p>Camila Villa Zertuche is a multimedia artist working in painting, drawing, and three-dimensional design. Her art references childhood drawings of exaggerated girl-women and modern media to illustrate a femme identity that is half imagined and half experienced. Camila muddies the naïveté in her hyper stylized figures through layers of paint, washes, and marks to explore how femme identity is first introduced, expressed, and then experienced in a visually saturated world. She also explores femme identity from within and between different cultures. Camila was born in Mexico City in 1996 and later grew up in Miami, FL. She graduated from the Cooper Union for the Advancement of Science and Art in New York City in 2020. Her work has been exhibited at JuniorHigh in Los Angeles, The Cooper Union, Firth Studio, and La MaMa Galleria in New York City, HolyRad Studio in Brooklyn, Locust Projects in Miami, and virtually through Lucien Smith’s online platform: Serving The People. Her work exists in private collections in Argentina, China, France, Mexico, and the United States. Camila currently creates from her studio in New York City. </p>
      </article>
    </Container>
  )
}

export default AboutMe
