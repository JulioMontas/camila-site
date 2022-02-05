import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo"
import Container from "../components/container";

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact Me" />
      <Container>
        <div>
          <h2>Contact Me</h2>
          <p><b>Instagram:</b></p>
        </div>

        <div>
          <form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="name@name.com" />
            <textarea type="text" name="message" />
            <button>Send</button>
          </form>
        </div>

      </Container>
    </Layout>
  )
}
export default ContactPage
