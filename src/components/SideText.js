import React, { useEffect, useState } from "react";
import { GiHeartWings } from "react-icons/gi";
import "./SideText.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SideText = () => {
  const [showSideText, setShowSideText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 500) {
        setShowSideText(true);
      } else {
        setShowSideText(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={`sidetext ${showSideText ? "show" : ""}`}>
      <h4 className="title">
        HAIL &nbsp;TECHNOCRACY &nbsp;<GiHeartWings size={50} />
      </h4>
    </div>
  );
};

export default SideText;
