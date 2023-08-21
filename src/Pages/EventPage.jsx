// import React, { useEffect, useState } from "react";
// import SliderContent from "./SliderContent";
// import Dots from "./Dots";
// import Arrows from "./Arrows";
// import sliderImage from "./SliderImage";
// import "./EventPage.css";
// import { Col, Container, Row } from "react-bootstrap";

// const len = sliderImage.length - 1;

// export const EventPage = () => {
//     return (
// function EventPage(props) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   return (
//     <div className="event" id="event">
//     <div className="slider-container">
//       <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
//       <Arrows
//         prevSlide={() =>
//           setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
//         }
//         nextSlide={() =>
//           setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
//         }
//       />
//       <Dots
//         activeIndex={activeIndex}
//         sliderImage={sliderImage}
//         onclick={(activeIndex) => setActiveIndex(activeIndex)}
//       />
//     </div>
//     <div className="event-content">
//       <div className="upevents">
//       <h1>Upcoming Events</h1>
//       <div className="acm-events">
//         <div className="event-txtx">
//           <ul className="event-con">
//           <li><h4>ACM-W Inaugration</h4> <h4> Date: 24-03-2023</h4></li>
//           {/* <h4>Date: 24-03-2023</h4> */}
//           </ul>
//         </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

//     );
// }



import React from 'react'

const EventPage = () => {
  return (
    <div>
      <h1>This is event page</h1>
    </div>
  )
}

export default EventPage
