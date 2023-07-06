import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {FaBars} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import acmlogo from "../assets/img/acmlogo.png"

 const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
     return(
        <div className="container">
        <nav className='navbar'>
           
            <img className ="logo" src={acmlogo} alt="Logo"/>

            <ul className={Mobile? " nav-links-mobile" : "nav-links"} onClick={() =>setMobile(false)}> 
            <Link to='/'><li>Home</li></Link>
            <Link to='/aboutus'><li>About us</li></Link>
            <Link to='/departmentpage'><li>Department</li></Link>
            <Link to='/events'><li>Events</li></Link>
            <Link to='/'><li>Blogs</li></Link>
            <Link to='/'><li>Join Us</li></Link>
            
            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile? <ImCross/> : <FaBars/>}
                
            </button>
            </nav>
            </div>  
     )
 }
 export default Navbar 


