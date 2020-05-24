import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import "./News.css";

import I1 from '../images/sl3.jfif'
import I2 from '../images/sl4.jfif'
import I3 from '../images/sl5.jfif'
class Cryptoyans extends Component {
    render() {
        return (
            <Fade bottom>
                <Col md={12} className="bold">
                    <Row>
                        <Col md={4} className="light">
                            <img src={I1} alt="" className="news-image"/>
                            <div>
                                <p>WATCH TOWER CONFERENCE</p>
                                <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                    - where cooperation on data can lead to enormous business opportunities...
                                </span>
                            </div>
                            <div className="pt-3">
                                <span className="buttons">Share</span>
                                <span className="buttons">Queue</span>
                            </div>
                        </Col>
                        <Col md={4} className="light">
                            <img src={I3} alt="" className="news-image"/>
                            <div>
                                <p>WATCH TOWER CONFERENCE</p>
                                <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                    - where cooperation on data can lead to enormous business opportunities...
                                </span>
                            </div>
                            <div className="pt-3">
                                <span className="buttons">Share</span>
                                <span className="buttons">Queue</span>
                            </div>
                        </Col>
                        <Col md={4} className="light">
                            <img src={I2} alt="" className="news-image"/>
                            <div>
                                <p>WATCH TOWER CONFERENCE</p>
                                <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                    - where cooperation on data can lead to enormous business opportunities...
                                </span>
                            </div>
                            <div className="pt-3">
                                <span className="buttons">Share</span>
                                <span className="buttons">Queue</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Fade>
        );
    }
}

export default Cryptoyans;