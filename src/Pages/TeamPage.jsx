import React from 'react'
import blog1 from "../assets/img/blogimg1.jpg";
import "./TeamPage.css";
import { Row } from 'react-bootstrap';

const TeamPage = () => {
  return (
    <div>
      <React.Fragment>
            <h2 className="text-center "> ACM-W Team </h2>
            <div class="container">
               
  <div className="row">
    <div className="col-sm">
        <div class="card">
  <img class="card-img-top" src={blog1} alt="Blog" />
  <div class="card-body">
    <h5 class="card-title">Nishtha Chaudhari</h5>
    <p class="card-text">Chairperson</p>
  </div>
</div></div>
    <div className="col-sm">
        <div class="card">
  <img class="card-img-top" src={blog1} alt="Blog" />
  <div class="card-body">
    <h5 class="card-title">Nishtha Chaudhari</h5>
    <p class="card-text">Vice Chairperson</p>
  </div>
</div></div>
    <div className="col-sm">
        <div class="card">
  <img class="card-img-top" src={blog1} alt="Blog" />
  <div class="card-body">
    <h5 class="card-title">Nishtha Chaudhari</h5>
    <p class="card-text">TechYoutha</p>
  </div>
</div></div>

  </div>
</div>
</React.Fragment>
</div>

  )
}

export default TeamPage
