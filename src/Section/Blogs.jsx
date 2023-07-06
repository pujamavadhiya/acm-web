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
    <h5 class="card-title">Name</h5>
    <p class="card-text">Welcome to ACM-W PDEU STUDENT CHAPTER</p>
    <a href="#" class="btn btn-link">Read More</a>
  </div>
</div></div>
    <div className="col-sm">
        <div class="card">
  <img class="card-img-top" src={blog1} alt="Blog" />
  <div class="card-body">
    <h5 class="card-title">Name</h5>
    <p class="card-text">Welcome to ACM-W PDEU STUDENT CHAPTER</p>
    <a href="#" class="btn btn-link">Read More</a>
  </div>
</div></div>
    <div className="col-sm">
        <div class="card">
  <img class="card-img-top" src={blog1} alt="Blog" />
  <div class="card-body">
    <h5 class="card-title">Name</h5>
    <p class="card-text">Welcome to ACM-W PDEU STUDENT CHAPTER</p>
    <a href="#" class="btn btn-link">Read More</a>
  </div>
</div></div>
  </div>
</div>
</React.Fragment>
</section>
);
};