import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./LandingPage.css";
import bg from '../images/broadcast.jpg';

import FB from "../images/facebook.svg";
import TW from "../images/twitter.svg";
import YT from "../images/youtube.svg";

class LandingPage extends Component {
    render() {
        return (
            <Container fluid>
                <Container className="landing-page-wrapper">
                    <Row>
                        <Col md={2} sm={1} className="push sos">
                            <div className="socials">
                                <Fade left delay={400}>
                                    <p>FOLLOW US </p>
                                </Fade>
                            </div>
                            <center className="mt-2">
                                <Fade top delay={1000}>
                                    <div><img src={FB} alt="" className="social-icons"/></div>
                                </Fade>
                                <Fade top delay={1500}>
                                    <div><img src={TW} alt="" className="social-icons"/></div>
                                </Fade>
                                <Fade top delay={2000}>
                                    <div><img src={YT} alt="" className="social-icons"/></div>
                                </Fade>
                            </center>
                        </Col>
                        <Col md={9} sm={11}>
                            <h1 className="bold faded">Now Live</h1>
                            <img src={bg} alt="" className="styles"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default LandingPage;