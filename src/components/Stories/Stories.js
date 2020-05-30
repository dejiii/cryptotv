import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
// import axios from "axios";
import "./Stories.css";
import play from "../../play.svg"

import S0 from "../images/sl1.jfif";
import S2 from "../images/sl2.jfif";
import S3 from "../images/sl3.jfif";
import S4 from "../images/sl4.jfif";
import S5 from "../images/sl5.jfif";
import S6 from "../images/sl6.jfif";
import S7 from "../images/sl7.jfif";
import S8 from "../images/sl8.jfif";


import p1 from "../images/pl1.jfif";
import p2 from "../images/pl2.jfif";
import p3 from "../images/pl3.jfif";
import p4 from "../images/pl4.jfif";
import p5 from "../images/pl5.jfif";

class Stories extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         crypto: []
    //     };
    // }

    // componentDidMount() {
    //     axios.get
    // }

    render() {
        return (
            <Container fluid>
                <Fade>
                <Container className="landing-page-wrapper">
                    <Row>
                        <Col md={9} className="">
                            <h1 className="bold pb-5">Top Stories</h1>
                            <div className="">
                                <Col className="px-0 cover" md={12} sm={2}>
                                    <Fade bottom>
                                    <Row>
                                        <Col md={7} className="px-0 test">
                                            <div className="absolute style">
                                                <div className="position">
                                                    <img src={p5} alt="" className="style"/>
                                                </div>
                                                <span className="relative">LIVE</span>                                                
                                            </div>
                                        </Col>
                                        <Col md={5} className="caption-section">
                                            <h3>Blockchain and Spending Catalyst</h3>
                                            <p><i>By: Ibim Buskler</i></p>
                                            <span className="buttons">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </Col>
                                    </Row>
                                    </Fade>
                                </Col>
                                <Col className="px-0 cover mt-5" md={12}>
                                    <Fade bottom>
                                    <Row>
                                        <Col md={7} className="px-0 test">
                                            <div className="absolute style">
                                                <div className="position">
                                                    <img src={p1} alt="" className="style"/>
                                                </div>
                                                <span className="relative">LIVE</span>                                                
                                            </div>
                                        </Col>
                                        <Col md={5} className="caption-section">
                                            <h3>Blockchain and Spending Catalyst</h3>
                                            <p><i>By: Ibim Buskler</i></p>
                                            <span className="buttons">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </Col>
                                    </Row>
                                    </Fade>
                                </Col>
                                <Col className="px-0 cover mt-5" md={12}>
                                    <Fade bottom>
                                    <Row>
                                        <Col md={7} className="px-0 test">
                                            <div className="absolute style">
                                                <div className="position">
                                                    <img src={p2} alt="" className="style"/>
                                                </div>
                                                <span className="relative">LIVE</span>                                                
                                            </div>
                                        </Col>
                                        <Col md={5} className="caption-section">
                                            <h3>Blockchain and Spending Catalyst</h3>
                                            <p><i>By: Ibim Buskler</i></p>
                                            <span className="buttons">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </Col>
                                    </Row>
                                    </Fade>
                                </Col>
                                <Col className="px-0 cover mt-5" md={12}>
                                    <Fade bottom>
                                    <Row>
                                        <Col md={7} className="px-0 test">
                                            <div className="absolute style">
                                                <div className="position">
                                                    <img src={p3} alt="" className="style"/>
                                                </div>
                                                <span className="relative">LIVE</span>                                                
                                            </div>
                                        </Col>
                                        <Col md={5} className="caption-section">
                                            <h3>Blockchain and Spending Catalyst</h3>
                                            <p><i>By: Ibim Buskler</i></p>
                                            <span className="buttons">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </Col>
                                    </Row>
                                    </Fade>
                                </Col>
                                <Col className="px-0 cover mt-5" md={12}>
                                    <Fade bottom>
                                    <Row>
                                        <Col md={7} className="px-0 test">
                                            <div className="absolute style">
                                                <div className="position">
                                                    <img src={p4} alt="" className="style"/>
                                                </div>
                                                <span className="relative">LIVE</span>                                                
                                            </div>
                                        </Col>
                                        <Col md={5} className="caption-section">
                                            <h3>Blockchain and Spending Catalyst</h3>
                                            <p><i>By: Ibim Buskler</i></p>
                                            <span className="buttons">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </Col>
                                    </Row>
                                    </Fade>
                                </Col>
                            </div>
                        </Col>
                        <Col md={3} >
                            <h1 className="pb-5 bold ppp">Latest</h1>
                            <div data-simplebar className="latest-stories">
                                <Fade bottom>
                                <div>
                                    <img src={S4} alt="" className="side-image" />
                                    <h5><img src={play} alt="" className="play"/> WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div>
                                    <img src={S0} alt="" className="side-image" />
                                    <h5><img src={play} alt="" className="play"/> WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div>
                                    <img src={S7} alt="" className="side-image" />
                                    <h5><img src={play} alt="" className="play"/> WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div>
                                    <img src={S2} alt="" className="side-image" />
                                    <h5><img src={play} alt="" className="play"/> WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div>
                                    <img src={S3} alt="" className="side-image" />
                                    <h5><img src={play} alt="" className="play"/> WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div>
                                    <img src={S5} alt="" className="side-image" />
                                    <h5><img src={play} alt="" className="play"/> WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                            </div>
                            <h1 className="mt-5 pb-4 bold ppp">Stories</h1>
                            <div  className="latest-stories">
                                <Fade bottom>
                                <div>
                                    <img src={S6} alt="" className="side-image" />
                                    <h5>WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div>
                                    <img src={S7} alt="" className="side-image" />
                                    <h5>WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div>
                                    <img src={S8} alt="" className="side-image" />
                                    <h5>WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div>
                                    <img src={S0} alt="" className="side-image" />
                                    <h5>WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div>
                                    <img src={S2} alt="" className="side-image" />
                                    <h5>WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div>
                                    <img src={S4} alt="" className="side-image" />
                                    <h5>WATCH TOWER CONFERENCE</h5>
                                    <p>Keeping hackers out of our systems</p>
                                </div>
                                </Fade>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </Fade>
            </Container>
        );
    }
}

export default Stories;