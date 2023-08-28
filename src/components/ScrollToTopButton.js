import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-to-top ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp size={32} />
    </div>
  );
};

export default ScrollToTopButton;
