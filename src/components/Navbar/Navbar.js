import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Ticker from "react-ticker";
import "./Navbar.css";

import Logo from "../../logo.svg";

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Container  className="nav-wrapper">
          <Navbar.Brand>
            <img src={Logo} alt="" className="logo"/>
          </Navbar.Brand>
            <Ticker>
                {() => (
                    
                        <h1>CryptoStats go hehre</h1>
                    
                )}
            </Ticker>
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
