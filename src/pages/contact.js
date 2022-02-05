import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo"
import Container from "../components/container";

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact Me" />
      <Container>
        <div class="pt-32 pb-32">
          <h2>Contact Me</h2>
          <a href="https://www.instagram.com/chameleoncamila/"><b>Instagram:</b>@ChameleonCamila</a>
        </div>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Your Role: <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Container>
    </Layout>
  )
}
export default ContactPage
