import styled, { keyframes } from "styled-components";
import bannerBG from "../../assets/images/vighero/vig_bg.webp";

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
    right: 5%;
  }
  50% {
    right: 15%;
  }
  100% {
    right: 5%;
  }
`;

const quarterCircle = keyframes`
  0% {
    bottom: 0;
  }
  50% {
    bottom: 30%;
  }
  100% {
    bottom: 0;
  }
`;

const Circle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: translate(80px, -80px);
    transform: rotate(30deg);
  }
`; 

const VigyaanStyleWrapper = styled.section`
  @font-face {
    font-family: "Minecraftia";
    src: url("../../assets/font/Minecraftia-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  position: relative;
  height: 100vh;
  padding: 0;
  overflow: hidden;

  .asto {
    position: absolute;
    top: 110vh;
    left: 5vw;
    height: 400px;
  }

  .planet1 {
    position: absolute;
    top: 10vh;
    right: 0%;
    height: 100px;
    animation: ${rotate360} 15s linear infinite;
  }

  .planet2 {
    animation: ${quarterCircle} 4s linear infinite;
    left: 0%;
    height: 200px;
  }

  .planet3 {
    position: absolute;
    top: 30vh;
    left: 2vw;
    height: 200px;
    animation: ${Circle} 3s linear infinite;
  }

  .vigyaan-planet {
    left: 50%;
    top: 20vh;
    position: relative;
    transform: translateX(-50%);
    width: 35vw;
    z-index: 1;
  }

  .vigyaan-font p {
    font-family: "Minecraftia", sans-serif;
  }

  .vigyaan-font {
    left: 32%;
    position: absolute;
    top: 35vh;
    font-size: 5.5rem;
    color: black;
    font-family: "Minecraftia", sans-serif;
    z-index: 2;
    font-weight: 900;
    text-shadow: 2px 2px 5px #fe7be5d1;
  }

  .vigyaan-desc {
    position: absolute;
    top: 53vh;
    z-index: 2;
    padding: 0 13rem 0 10rem;
    font-family: "Minecraftia", sans-serif;
    color: white;
    z-index: 2;
  }

  .vigyaan-ring {
    animation: ring-animation 3s;
    animation-iteration-count: 1;
    left: 50%;
    position: absolute;
    top: 58vh;
    transform: translateX(-50%);
    width: 70vw;
    z-index: 2;
  }

  .btncontainer2 {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .cta2 {
    display: flex;
    padding: 5px 45px;
    text-decoration: none;
    font-family: "Minecraftia", sans-serif;
    font-size: 25px;
    font-weight: 600;
    color: white;
    background: #6225e6;
    transition: 0.5s;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
    justify-content: center;
    align-items: center;
  }

  .cta2:focus {
    outline: none;
  }

  .cta2:hover {
    transition: 0.5s;
    box-shadow: 10px 10px 0 #fbc638;
  }

  .cta2 span {
    transform: skewX(15deg);
  }

  .cta2 span:nth-child(2) {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }

  @keyframes color_anim {
    0% {
      fill: white;
    }
    50% {
      fill: #fbc638;
    }
    100% {
      fill: white;
    }
  }

  @media (max-width: 1232px) {
    .vigyaan-font {
      font-size: 4rem;
    }

    .vigyaan-desc {
      padding: 0 5rem;
    }

    .btncontainer2 {
      top: 70%;
    }
  }

  // Add remaining media queries and other styles
`;

export default VigyaanStyleWrapper;
