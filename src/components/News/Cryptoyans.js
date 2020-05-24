import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import "./News.css";

class Cryptoyans extends Component {
    render() {
        return (
            <Fade bottom>
                <Col md={12} className="bold">
                    <Row>
                        <Col md={4}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis repellendus nobis commodi laborum? Doloremque, ipsam! Expedita at, ratione, veniam ullam suscipit odit molestiae alias harum, nisi dolores quam. Ut, animi!
                        </Col>
                        <Col md={4}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quaerat, ea sit quidem molestiae vitae iusto dolorem hic quibusdam fugiat autem animi inventore unde? Consequuntur nisi enim temporibus vel qui.
                        </Col>
                        <Col md={4}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae itaque hic consequatur alias rerum. Deleniti cum reiciendis, error aspernatur possimus corrupti a qui repudiandae distinctio quod maxime soluta asperiores!
                        </Col>
                    </Row>
                </Col>
            </Fade>
        );
    }
}

export default Cryptoyans;