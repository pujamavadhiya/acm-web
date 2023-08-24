import meter1 from "../assets/img/webcir5.png";
import meter2 from "../assets/img/adcir1.png";
import meter3 from "../assets/img/aicir1.png";
import meter4 from "../assets/img/CPCIR1.png";
import meter5 from "../assets/img/cscir.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Departments.css"

export const Departments = () => {

  const responsive = {
    
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
      
    <section className="dept" id="dept" >
        <div className="container" >
         
            <div className="row">
                <div className="col-12">
                    <div className="dept-bx wow zoomIn ">
                        <h1 className="h1">Departments</h1>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme dept-slider">
                            <div className="item">   
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>App Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>AI/ML</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Competitive Programming</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Cyber Security</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
