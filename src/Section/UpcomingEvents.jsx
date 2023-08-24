import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/eventimg.jpg";
import eventimg from "../assets/img/eventimg.jpg"
import './UpcomingEvents.css';

import React from 'react'

export const UpcomingEvents = () => {
  return (
    <section className="upcomingevents" id="upcomingevents">
      <div className="upevents">
        <div className="eventbox ">
      
        <h1 className="head">Our Previous Events: </h1><br></br>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
       <div className="points">
        <p >ACM-W PDEU Student Chapter Inaugration   24th March 2023</p>
        <p >Expert Session on Applied Data Science and Stock market Predictions   7th April 2023</p>
        <p >AR-VR Introductory Session   13th April 2023</p>
        <p >Live demo on AR-VR technology   20th April 2023</p>
        <p>HACKHERS CLASH   16th June 2023</p>
        </div>
        </Col>
       
        </Row>
    </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
