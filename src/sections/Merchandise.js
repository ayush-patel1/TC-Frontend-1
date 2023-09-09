import React from "react";
import Title from "../components/Title";
import videoBg from "../assets/videos/tshirt.webm";


const Merchandise = () => {

    const videostyles = {
        // position:"absolute",
        // top:"0",
        // left:"0",
        // width:"100%",
        // height:"100%",
        // objectFit:"cover",
        width:"100%"
      }
  return (
    <div className="container collectionContainer" style={{paddingBottom:"3rem"}}>
      <Title color={"OUR"} noncolor={"MERCHANDISE"} />
      <div data-aos="fade-up" className="container">
        <div className="fn_cs_news container">
          <div className="news_part">
            <div className="left_items" style={{ margin: "0" }}>
              <div className="blog__item">
                <video autoPlay muted loop style={videostyles}>
                  <source src={videoBg} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
