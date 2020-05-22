import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

import Logo from "../../logo.svg";

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Container  className="nav-wrapper">
          <Navbar.Brand>
            <img src={Logo} alt="" />
          </Navbar.Brand>
            <marquee>
              Some really really really really really long text Some really really really really really long 
              text Some really really really really really long text Some really really really really really long text
            </marquee>
          <Nav>
              <a href="/">HOME</a>
              <a href="/">BLOG</a>
              <a href="/">CONTACT US</a>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
