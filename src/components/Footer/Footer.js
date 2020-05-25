import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

import Logo from "../../logo.svg";
import FB from "../images/facebook.svg";
import TW from "../images/twitter.svg";
import YT from "../images/youtube.svg";
import AP from "../images/appstore.svg";
import AA from "../images/google play.svg";

class Footer extends Component {
    render() {
        return (
            <Container className="footer-section-wrapper">
                <Row>
                    <Col sm={12} md={5}>
                        <img src={Logo} alt="" />  
                        <div className="store-banner-wrapper">
                            <p className="bold">CRYPTOTV LIVE APP COMING SOON</p>
                            <img src={AP} alt="" className="store-banner"/>
                            <img src={AA}alt="" className="store-banner"/>
                        </div>                  
                    </Col>
                    <Col sm={12} md={7}>
                        <Row>
                            <Col md={4} className="main-section">
                                <p className="bold pp">ABOUT</p>
                                <div>
                                    <a href="/">About us</a>                                   
                                </div>
                                <div>
                                    <a href="/">Our Partners</a>                             
                                </div>
                                <div>
                                    <a href="/">Advertise with us</a>     
                                </div> 
                            </Col>
                            <Col md={4} className="main-section">
                                <p className="bold pp">POLICY</p>
                                <div>
                                    <a href="/">Terms of service</a> 
                                </div>
                                <div>
                                    <a href="/">Privacy Policy</a>                                     
                                </div>
                            </Col>
                            <Col md={4} className="main-section">
                                <p className="bold pp">CONTACT US</p>
                                <div>
                                    <a href="mailto:hello@cryptotvplus.com">
                                        hello@cryptotvplus.com
                                    </a> 
                                </div>
                                <div>
                                    <img src={FB} alt="" className="social-icons pp"/>
                                    <img src={TW} alt="" className="social-icons pp"/>
                                    <img src={YT} alt="" className="social-icons pp"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pt-4">
                                <p>Copyright &#9400; CRYPTOTVPLUS All rights reserved</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;