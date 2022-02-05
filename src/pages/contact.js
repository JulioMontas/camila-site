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
        {/*
          <form method="post" name="contact-form" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="name@name.com" />
            <textarea type="text" name="message" />
            <button>Send</button>
          </form>
          */}


          <form name="contact-me" method="POST" data-netlify="true">
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






        </div>

      </Container>
    </Layout>
  )
}
export default ContactPage
