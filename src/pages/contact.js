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
        <form
          name="contact-meeee"
          method="POST"
          data-netlify-recaptcha="false"
          data-netlify="true"
        >
          <p>
            <label>
              E-mail <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Message <textarea name="message"></textarea>
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Container>
    </Layout>
  )
}
export default ContactPage
