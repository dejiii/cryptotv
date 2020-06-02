import React, { useState } from 'react';
import Logo from "../../logo.svg";
import Slide from "./marquee";
import {Container} from 'react-bootstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './Nav.css';

const Navb = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className="disappears smallestText">
      <Navbar expand="md" color="light" className="nav-wrapper">
        <NavbarBrand href="/">
            <img src={Logo} alt="" className="logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink></NavLink>
            </NavItem>
            <NavItem>
              <NavLink></NavLink>
            </NavItem> */}
          </Nav>
          <Nav>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/"className="live">LIVE</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/"className="nav_links">NEWS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/"className="nav_links">BLOG</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/"className="nav_links">CONTACT US</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="not-display" >
          <Slide />
      </div>
    </Container>
  );
}

export default Navb;