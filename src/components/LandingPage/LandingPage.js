import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LandingPage.css";

// import video from '../6 Google Ads 1.avi';
import FB from "../images/facebook.svg";
import TW from "../images/twitter.svg";
import YT from "../images/youtube.svg";

class LandingPage extends Component {
    render() {
        return (
            <Container fluid>
                <Container className="landing-page-wrapper">
                    <Row>
                        <Col md={2} className="push">
                            <p className="socials">FOLLOW US </p>
                            <center className="mt-2">
                                <div><img src={FB} alt="" className="social-icons"/></div>
                                <div><img src={TW} alt="" className="social-icons"/></div>
                                <div><img src={YT} alt="" className="social-icons"/></div>
                            </center>
                        </Col>
                        <Col md={8}>
                            <h1 className="bold faded">Now Live</h1>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente eveniet, 
                                ea quas vel exercitationem dolorum enim fugit adipisci consectetur quasi ut. Eveniet 
                                ea quas vel exercitationem dolorum enim fugit adipisci consectetur quasi ut. Eveniet 
                                autem delectus quidem corporis suscipit laboriosam maiores!
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default LandingPage;