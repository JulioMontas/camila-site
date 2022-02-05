import React from "react";
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import Container from "./container";

const Header = ({ siteTitle }) => (
    <div>
    <Container>
      <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
          <Link to="/" className="hover:underline">
            Camila Villa Zertuche
          </Link>
        </h1>
      </div>

      <div>
        <ul class="flex">
          <li class="mr-6">
            <Link class="text-blue-500 hover:text-blue-800" to="/aboutme">About Me</Link>
          </li>
          <li class="mr-6">
            <Link class="text-blue-500 hover:text-blue-800" to="/work">Work</Link>
          </li>
          <li class="mr-6">
            <Link class="text-blue-500 hover:text-blue-800" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
      </Container>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
