import React from "react";
import "./Home.css";
import PetalAnimation from "../../components/PetalAnimation";
import title from "../../assets/images/HomePage/title.png";
import po from "../../assets/images/HomePage/po.png";
import tigress from "../../assets/images/HomePage/tigress.png";

export default function Section1() {
  return (
    <div className="Home-sec1">
      {/* <PetalAnimation /> */}
      <div className="title-cont">
        <div className="title-cont-inn">
          <img className="home-title" src={title} />
        </div>
        <div className="img-cont">
          <img className="po-img title-comp" src={po} />
          {/* <img className="tigress-img title-comp" src={tigress} /> */}
        </div>
        <div className="btn-cont">
          <button className="stone btn-sec1">VIGYAAN</button>
          <button className="stone btn-sec1">igNITe</button>
        </div>
      </div>
    </div>
  );
}
