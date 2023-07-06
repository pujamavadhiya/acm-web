import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/bannerebg3.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import {Link, useNavigate } from "react-router-dom";
import "./Banner.css"

export const Banner = () => {
  return (

    <section className="banner" id="banner">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to acm-w</span> */}
                  <h2>What is acm-w ?</h2>
                  <p>Association for Computing Machinery Council on Women in Computing(ACM-W) is an organization dedicated to promoting gender equality and increasing the representation of women in computing fields. The organization is a subset of the larger ACM (Association for Computing Machinery) professional organization and focuses on supporting, celebrating, and advocating for women in computing worldwide.</p><p> ACM-W provides various opportunities, resources, and initiatives to support women in computing, including scholarships, awards, mentoring programs, workshops, networking events, and conferences. The organization also supports research and advocacy efforts aimed at improving the representation and retention of women in computing fields.</p>
                  <button onClick={() => console.log('aboutacm')}>Know more <ArrowRightCircle size={25} /></button>
                  {/* <Link to="https://india.acm.org/acm-w-india">Know more <ArrowRightCircle size={25} /></Link> */}
              </div>}
            </TrackVisibility>
            </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
