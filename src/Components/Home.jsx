import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "../Section/Banner";
import { Departments } from "../Section/Departments";
import {Faculty} from "../Section/Faculty";
import { UpcomingEvents } from "../Section/UpcomingEvents";
import { Blogs } from "../Section/Blogs";
import { FooterBox } from "../Section/FooterBox"

 const Home = () => {
     return(
        <section className='home'>
            <Banner/>
            <Departments/>
            <UpcomingEvents/>
            <Blogs/>
            <Faculty/>
            <FooterBox/>
        </section>
     )
 }
 export default Home