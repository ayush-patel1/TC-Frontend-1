import { useEffect, useState } from "react";
import { scrollTop } from "../utilits";
import uparrow from "../assets/svgs/uparrow.svg";
import { animateScroll as scroll } from "react-scroll";

const ScrollTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // Adjust the duration as needed
      smooth: "easeInOut", // Adjust the easing function as needed
    });
  };

  useEffect(() => {
    scrollTop();
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    border: `2px solid ${isHovered ? "black" : "transparent"}`,
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <div
      className="metaportal_fn_totop"
      style={{height: "183px"}}
    >
      <span className="totop_inner">
        <span 
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        className="icon"
        style={buttonStyle}
        >
          <img src={uparrow} alt="Up Arrow" />
        </span>
      </span>
    </div>
  );
};

export default ScrollTop;
