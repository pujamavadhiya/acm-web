import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/eventimg.jpg";
import './UpcomingEvents.css';

import React from 'react'

export const UpcomingEvents = () => {
  return (
    <section className="upcomingevents" id="upcomingevents">
      <Container>
    <div className="container">
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7} className="img1">
        {/* <img src={projImg1} alt="Header Img"/> */}
        </Col>
        <Col xs={12} md={6} xl={5} className="img2">
        <img src={projImg1} alt="Header Img"/>
        </Col>
      </Row>
    </div>
    </Container>
    </section>
  )
}

export default UpcomingEvents
