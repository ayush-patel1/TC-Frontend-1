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
      <div  className="fn_cs_desc">
          <p>
          Slay the college fest season in a Techy look and embrace the engineer within you! ✨

Tech would flow through your blood and come out through your sweat as  Team Technocracy launches its very own Merchandise for you all! 🚀 

Be a part of the gigantic Tech Fest AAVARTAN'23-24 (Cosmoscape) and have some imprints of it on yourselves! 

The comfortable and trendy attire awaits you! Hurry up and Order now through the given link! 🔗
<br />
 Form link : 
<br />
 Last date to Order: 
<br />
Price:

          </p>
        </div>
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
