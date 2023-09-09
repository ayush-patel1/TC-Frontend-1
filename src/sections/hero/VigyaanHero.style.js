import styled, { keyframes } from "styled-components";
import bannerBG from "../../assets/images/vighero/vig_bg.webp";

const rotate360 = keyframes`
0% {
  transform: rotate(0deg);
  right : 5%;
}
50% {
  right : 15%
}
100% {
  transform: rotate(360deg);
  right : 5%
}
`;
const quarterCircle = keyframes`
0% {
  bottom : 0;
}
50% {
 bottom 30%;
}
100% {
  bottom : 0;
}
}
`;
const Circle = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}
`;


const VigyaanStyleWrapper = styled.section`
  position: relative; 
  // background: url(${bannerBG});
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-attachment: fixed;
  // height: 100vh;
  padding: 0px 0px;
  overflow: hidden;

  .asto{
    position: absolute ;
    top: 110vh ;
    left: 5vw;
    height: 400px ;
  }

  .planet1{
    position: absolute;
    top: 10vh;
    right: 0%;
    height: 100px ;
    animation: ${rotate360} 15s linear infinite;
  }
  .planet2{
     animation: ${quarterCircle} 4s linear infinite;
     left: 0%;
     height: 200px ;
  }
  .planet3{
    position: absolute;
    top: 30vh; 
    left: 2vw;
    height: 200px ;
    animation: ${Circle} 15s linear infinite;
  }
  .vigyaan-planet {
    left: 49%;
    position: relative;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 70vw;
    z-index: 1;
  }
  .vigyaan-font p{
    font-family: angora;
  }
  .vigyaan-font {
  
  // -webkit-animation: cosmos-animation 3s;
  // animation: cosmos-animation 3s;
  left: 32%;
  // opacity: .5;
  position: absolute;
  top: 35vh;
  // -webkit-transform: translateX(-50%);
  // transform: translateX(-50%);
  // width: 45vw;
  font-size: 5.5rem;
  color:white;
  z-index: 2;
  font-weight: 900;
  text-shadow: 2px 2px 5px #FE7BE5D1;
  }

  .vigyaan-desc{
  position:absolute;
  top: 53vh;
  z-index:2;
  padding: 0 13rem 0 10rem;
  color:white;
  z-index: 2;
}
  .vigyaan-ring {
  -webkit-animation: ring-animation 3s;
  animation: ring-animation 3s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  left: 50%;
  position: absolute;
  top: 40vw;
  top: 58vh;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 90vw;
  width: 70vw;
  z-index: 2;
}

  .btncontainer{
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
 }

 @media (max-width: 1121px) {
  
  .vigyaan-font {
    font-size: 4rem; 
  }

  .vigyaan-desc {
    padding: 0 5rem 0 5rem; 
  }

  .btncontainer{
    top: 70%;
  }
  @media (max-width: 890px) {
    height:100vh;
  
    .vigyaan-font {
      font-size: 3rem; 
      top: 35vh;
    }
  
    .vigyaan-desc {
      padding: 0 5rem 0 5rem;
      font-size: 1rem;
      top: 50vh;
    }
  
    .btncontainer{
      top: 70%;
    }
}
@media (max-width: 800px) {
  .planet1{
    height: 50px ;
  }
  .planet2{
     height: 100px ;
  }
  .planet3{
    height: 100px ;
  }
}
@media (max-width: 726px) {
  .vigyaan-ring {
    display:none;
  }
  .vigyaan-font {
    font-size: 2.5rem; 
    top: 25vh;
  }

  .vigyaan-desc {
    padding: 0 5rem 0 5rem;
    font-size: 1rem;
    top: 40vh;
  }
  .vigyaan-planet{
    margin-top: 50px;
  }
}
@media (max-width: 515px) {
  .vigyaan-font {
    font-size: 2rem; 
    top: 25vh;
  }

  .vigyaan-desc {
    padding: 0 5rem 0 5rem;
    font-size: 1rem;
    top: 40vh;
  }
  .btncontainer{
    top: 80%;
  }
  

}
@media (max-width: 426px) {
  .vigyaan-font {
    font-size: 1.8rem; 
    top: 25vh;
    left: 28%;
  }
  .vigyaan-desc {
    padding: 0 1rem 0 1rem;
    font-size: 1rem;
    top: 35vh;
  }
  .planet1{
    height: 40px ;
  }
  .planet2{
     height: 70px ;
  }
  .planet3{
    height: 70px ;
  }
}
@media (max-width: 330px) {
  .vigyaan-font {
    font-size: 1.6rem; 
    top: 24vh;
    left: 26%;
  }
  .vigyaan-desc {
    padding: 0 1rem 0 1rem;
    font-size: 1rem;
    top: 35vh;
  }
}
@media (max-width: 280px) {
  .btncontainer{
    top: 90%;
  }
}
@media (max-width: 251px) {
  .vigyaan-font {
    font-size: 1rem; 
    top: 20vh;
    left: 28%;
  }
}

}

`;

export default VigyaanStyleWrapper;
