import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import "./News.css";



class News extends Component {

    render() {
        return (
            <Container fluid>
                <Fade bottom>
                <Container className="landing-page-wrapper">
                    <Row>
                        <Col md={4}>
                            <h3 className="bold faded">Menu</h3>
                            <div>
                                <span>CTYPLUS NEWS UPDATE</span>
                            </div>
                            <div>
                                <span>CTYPLUS NEWS RECAP</span>
                            </div>
                            <div>
                                <span>EVENT/AMA</span>
                            </div>
                            <div>
                                <span>CRYPTO YANS</span>
                            </div>

                        </Col>
                        <Col md={8}>
                            <h1>Test</h1>
                        </Col>
                    </Row>
                </Container>
                </Fade>
            </Container>
        );
    }
}

export default News;