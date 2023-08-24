import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {FaBars} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import acmlogo from "../assets/img/acm_logo.png"

 const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
     return(
        <div className="container">
        <nav className='navbar'>
           
            <img className ="logo" src={acmlogo} alt="Logo"/>

            <ul className={Mobile? " nav-links-mobile" : "nav-links"} onClick={() =>setMobile(false)}> 
            <Link to='/' className="home"><li>Home</li></Link>
            <Link to='/aboutus' className="aboutus"><li>About us</li></Link>
            <Link to='/departmentpage' className="deptpage"><li>Department</li></Link>
            <Link to='/team'className="events"><li>Our Team</li></Link>
            {/* <Link to='/'className="blogs"><li>Blogs</li></Link> */}
            <Link to={{ pathname: "https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD" }} target="_blank" className="joinacm">Join ACM-W</Link>
            
            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile? <ImCross/> : <FaBars/>}
                
            </button>
            </nav>
            </div>  
     )
 }
 export default Navbar 


