import React from "react";
import title from "../../assets/images/HomePage/title.png";
import po from "../../assets/images/HomePage/po.png";
import home_hero from "../../assets/videos/home-hero2.mp4";
import { useNavigate } from "react-router-dom";

export default function Section1() {
  const navigate = useNavigate();
  return (
    <div className="Home-sec1">
      <video src={home_hero} muted autoPlay loop className="hero-vid"></video>
      <div className="title-cont">
        <div className="title-cont-inn">
          <img className="home-title" src={title} alt=""/>
        </div>
        {/* <div className="img-cont">
          <img className="po-img title-comp" src={po} alt="" />
        </div> */}
        <div className="btn-cont">
          <button className="stone btn-sec1" onClick={(e) => {
            navigate('/vigyaan')
          }}>VIGYAAN</button>
          <button className="stone btn-sec1" onClick={(e) => {
            navigate('/ignite')
          }}>igNITe</button>
        </div>
      </div>
    </div>
  );
}
