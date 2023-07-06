
import faculty1 from "../assets/img/faculty.jpg";
import faculty2 from "../assets/img/faculty2.jpg";
// import ReactRoundedImage from "react-rounded-image";
import { Row } from "react-bootstrap";
import React from "react";
import "./Faculty.css"

export const Faculty  = () => {
  return (

<section className="faculty" id="faculty ">
 
        <React.Fragment>
            <h2 className="facultynm "> Faculty Advisor </h2>
            <div class="container">
  <div className="row">
    <div className="col">
        <div class="fac-card">
  <img class="fac-card-img-top" src={faculty1} alt="Blog" />
  <div class="fac-card-body">
    <h5 class="fac-card-title">Dr. Shakti Mishra</h5>
  </div>
</div></div>
    <div className="col">
        <div class="fac-card">
  <img class="fac-card-img-top" src={faculty2} alt="Blog" />
  <div class="fac-card-body">
    <h5 class="fac-card-title">Dr. Shilpa Pandey</h5>
  </div>
</div></div>
   
  </div>
</div>
</React.Fragment>

</section>
);
};