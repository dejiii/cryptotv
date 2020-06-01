import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./News.css";

import I1 from '../images/sl3.jfif';
import I2 from '../images/sl4.jfif';
import I3 from '../images/sl5.jfif';
import play from '../../play.svg';
class Cryptoyans extends Component {
    render() {


        return (
            <Fade bottom>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={6}
                    className="d-block dss"
                >
                    <div className="d-flex float-right w100">
                        <Slider>
                            <Slide index={0}>
                                <Row>
                                    <Col md={4} className="light">
                                        <img src={I1} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className="light disappear">
                                        <img src={I2} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className="light disappear">
                                        <img src={I3} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Slide>
                            <Slide index={1}>
                                <Row>
                                    <Col md={4} className="light">
                                        <img src={I3} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className="light disappear">
                                        <img src={I1} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className="light disappear">
                                        <img src={I2} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Slide>
                            <Slide index={2}>
                                <Row>
                                    <Col md={4} className="light">
                                        <img src={I2} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className="light disappear">
                                        <img src={I3} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className="light disappear">
                                        <img src={I1} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Slide>                                         
                            <Slide index={3}>
                                <Row>
                                    <Col md={4} className="light">
                                        <img src={I3} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className="light disappear">
                                        <img src={I2} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className="light disappear">
                                        <img src={I1} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Slide>                                         
                            <Slide index={4}>
                                <Row>
                                    <Col md={4} className="light">
                                        <img src={I1} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className="light disappear">
                                        <img src={I2} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className="light disappear">
                                        <img src={I3} alt="" className="news-image"/>
                                        <div>
                                            <img src={play} alt="" className="play"/>
                                            <span className="wt"><b>WATCH TOWER CONFERENCE</b></span>
                                        </div>
                                        <div>
                                            <span>Keeping hackers out of our systems i this day and age of big data and artificial intelligence
                                                - where cooperation on data can lead to enormous business opportunities...
                                            </span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="duration">12:30</span>
                                            <span className="buttons pl">Share</span>
                                            <span className="buttons pl">Queue</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Slide>                                         
                        </Slider>
                    </div>
                    <div className="w1002">
                        <ButtonBack className="ctrlbuttons">Back</ButtonBack>
                        <ButtonNext className="ctrlbuttons">Next</ButtonNext>
                    </div>
                </CarouselProvider>
            </Fade>
        );
    }
}

export default Cryptoyans;