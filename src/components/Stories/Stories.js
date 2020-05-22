import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Stories.css";

import fb from "../images/Ofelus.png";
import fb2 from "../images/branding19.png";

class Stories extends Component {
    render() {
        return (
            <Container fluid>
                <Container className="landing-page-wrapper">
                    <Row>
                        <Col md={9} className="">
                            <h1>Top Stories</h1>
                            <div>
                                <Col></Col>
                                <Col></Col>
                            </div>
                        </Col>
                        <Col md={3}>
                            <h1>Latest</h1>
                            <div  className="latest-stories">
                                <div>
                                    <img src={fb} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                                <div>
                                    <img src={fb} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                                <div>
                                    <img src={fb} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                                <div>
                                    <img src={fb} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                                <div>
                                    <img src={fb} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                                <div>
                                    <img src={fb} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                            </div>
                            <h1 className="mt-5">Stories</h1>
                            <div  className="latest-stories">
                                <div>
                                    <img src={fb2} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                                <div>
                                    <img src={fb2} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                                <div>
                                    <img src={fb2} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                                <div>
                                    <img src={fb2} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                                <div>
                                    <img src={fb2} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                                <div>
                                    <img src={fb2} alt="" className="side-image" />
                                    <h5>Heading</h5>
                                    <p>sub</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Stories;