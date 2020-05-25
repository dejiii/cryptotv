import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import "./LandingPage.css";

// import video from '../images/6 Google Ads 1.avi';
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
                            <h4>
                                <iframe 
                                    width="100%" 
                                    height="315" 
                                    src="https://www.youtube.com/embed/5DGyHTwduqk" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; gyroscope" 
                                    allowfullscreen>
                                </iframe>
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default LandingPage;