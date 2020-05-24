import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import "./News.css";
import Cryptoyans from "./Cryptoyans";
import Events from "./Events";
import NewsRecap from "./NewsRecap";
import NewsUpdate from "./NewsUpdate";


class News extends Component {
    
    constructor() {
        super();
        
        this.state = {
            option: "cryptoyans"
        };
    }
    switchContent(){

        if (this.state.option === 'cryptoyans') {
            return <Cryptoyans />
        }
        if (this.state.option === 'events') {
            return <Events />
        }
        if (this.state.option === 'newsrecap'){
            return <NewsRecap />
        }
        if (this.state.option === 'newsupdate'){
            return <NewsUpdate /> 
        }
    }

    render() {

        return (
            <Container fluid>
                <Fade bottom>
                <Container className="landing-page-wrapper">
                    <Row>
                        <Col md={4}>
                            <h3 className="bold faded">Menu</h3>
                            <div>
                                <span className="menu-items"
                                onClick={() => {
                                    this.setState({ option: "cryptoyans" });
                                }}
                                >CTYPLUS NEWS UPDATE
                                </span>
                            </div>
                            <div>
                                <span className="menu-items"
                                onClick={() => {
                                    this.setState({ option: "newsrecap" });
                                }}
                                >CTYPLUS NEWS RECAP
                                </span>
                            </div>
                            <div>
                                <span className="menu-items"
                                onClick={() => {
                                    this.setState({ option: "events" });
                                }}
                                >EVENT/AMA
                                </span>
                            </div>
                            <div>
                                <span className="menu-items"
                                onClick={() => {
                                    this.setState({ option: "newsupdate"});
                                }}
                                >CRYPTO YANS
                                </span>
                            </div>
                        </Col>
                        <Col md={8}>
                            {this.switchContent()}
                        </Col>
                    </Row>
                </Container>
                </Fade>
            </Container>
        );
    }
}

export default News;