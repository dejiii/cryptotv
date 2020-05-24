import React, { Component } from "react";
import { Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import "./News.css";

class NewsRecap extends Component {
    render() {
        return (
            <Fade bottom>
                <Col md={12} className="bold">
                    <h1>NEWS RECAP</h1>
                </Col>
            </Fade>
        );
    }
}

export default NewsRecap;