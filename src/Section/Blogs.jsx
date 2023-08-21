import React from "react";
import blog1 from "../assets/img/blogimg1.jpg";
import "./Blogs.css";

export const Blogs = () => {
    return (
        <section className="blog" id="blog ">
        <React.Fragment>
            <h2 className="text-center "> Blogs </h2>
            <div class="container">
  <div className="row">
    <div className="col-sm">
        <div class="card">
  <img class="card-img-top" src={blog1} alt="Blog" />
  <div class="card-body">
    <h5 class="card-title">Vaishvi Shah</h5>
    <p class="card-text">Are we shaping AI or is AI shaping us?</p>
    <a href="https://medium.com/@captainfluffyfingers/are-we-shaping-ai-or-is-ai-shaping-us-f92969a7eaca" target ="_blank" class="btn btn-link">Read More</a>
  </div>
</div></div>
    <div className="col-sm">
        <div class="card">
  <img class="card-img-top" src={blog1} alt="Blog" />
  <div class="card-body">
    <h5 class="card-title">Nishtha Chaudhari</h5>
    <p class="card-text">Targeted AI-Vertising</p>
    <a href="https://medium.com/@captainfluffyfingers/targeted-ai-vertising-f354cf324d5a" target ="_blank" class="btn btn-link">Read More</a>
  </div>
</div></div>
    <div className="col-sm">
        <div class="card">
  <img class="card-img-top" src={blog1} alt="Blog" />
  <div class="card-body">
    <h5 class="card-title">Nishtha Chaudhari</h5>
    <p class="card-text">TechYoutha</p>
    <a href="https://medium.com/@_earlybird/techyoutha-opening-gates-to-the-destruction-of-creativity-e187c6618d75" target ="_blank" class="btn btn-link">Read More</a>
  </div>
</div></div>
  </div>
</div>
</React.Fragment>
</section>
);
};