import React from 'react'
import { Col, Row } from "react-bootstrap";
import { Instagram, Linkedin } from 'react-bootstrap-icons';
import nimg from '../assets/img/img4.webp';
import linkedin from '../assets/img/linkedin.svg';
import instagram from '../assets/img/instagram.svg';
import twitter from '../assets/img/twitter.svg';
import gmail from '../assets/img/gmail.svg';
import "./FooterBox.css"

export const FooterBox = () => {
  return (
    <section className="footerbox">
      <Col lg={12}>
        <div className="FooterBox-bx wow slideInUp">

          <Row>
            {/* <img src={nimg} alt="Connect" /> */}
            <h1>Contact us</h1>
            <div className="social-icon">
              <a target="_blank" href='https://www.linkedin.com/company/acm-w-pdeu-student-chapter/mycompany/'><img className="icon linkedin-icon" src={linkedin} alt="ln" /></a>

              <a target="_blank" href='https://www.instagram.com/acmw_pdeu/?igshid=ZDdkNTZiNTM'><img className="icon instagram-icon" src={instagram} alt="in" /></a>

              <a target="_blank" href='#'><img className="icon twitter-icon" src={twitter} alt="ln" /></a>

              <a target="_blank" href='#'><img className="icon gmail-icon" src={gmail} alt="ln" /></a>
            </div>
          </Row>

        </div>
      </Col>
    </section>
  )
}

export default FooterBox
