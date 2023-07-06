import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import DeptPage from "./Pages/DeptPage";
import AboutUs from "./Pages/AboutUs";
import EventPage from "./Pages/EventPage";

 const App = () => {
     return(
        <>
         <Router>
        <Navbar/>
       
          <switch>
            <Route path='/' component={Home} exact>{" "}<Home/>{" "}</Route>
            <Route path='/aboutus' component={AboutUs} exact>{" "}<AboutUs/>{" "}</Route>
            <Route path='/departmentpage' component={DeptPage} exact>{" "}<DeptPage/>{" "}</Route>
            <Route path='/events' component={EventPage} exact>{" "}<EventPage/>{" "}</Route>

          </switch>
        </Router>
        </>
     )
 }
 export default App