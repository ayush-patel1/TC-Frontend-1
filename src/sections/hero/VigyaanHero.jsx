// import Button from "components/button";
// import BannerStyleWrapper from "./Banner.style";

import rocketThumb from "../../assets/images/rocket-front-color.png";
import planet from "../../assets/images/vighero/vig_planet.webp";
import name from "../../assets/images/vighero/vigyaan_font.webp";
import ring from "../../assets/images/vighero/planet_orbit.webp";
import rocketParticle from "../../assets/images/rocketStar.svg";
import VigyaanStyleWrapper from "./VigyaanHero.style";
import VIGButton from "../../layout/VIGButton";
import prop6 from "../../assets/prop6.png";
import prop7 from "../../assets/prop7.png";
import prop8 from "../../assets/prop8.png";
import prop5 from "../../assets/prop5.png";
import { keyframes, styled } from "styled-components";

const VigyaanHero = () => {
  const scrollToRegistration = () => {
    const registrationElement = document.getElementById('registration');
    if (registrationElement) {
        registrationElement.scrollIntoView({ behavior: 'smooth' });
    }
};
  const particles = [
    rocketParticle,
    rocketParticle,
    rocketParticle,
    rocketParticle,
    rocketParticle,
  ];

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
  
  const RotatingImage = styled.img`
    animation: ${rotate360} 15s linear infinite;
  `;
  const RotatingPlanet = styled.img`
    animation: ${Circle} 15s linear infinite;
  `;
  const CircularQuat = styled.img`
    animation: ${quarterCircle} 4s linear infinite;
  `;
//   const tokenImages = [tokenImg1, tokenImg2, tokenImg3, tokenImg4];
  return (
    <>
      <VigyaanStyleWrapper>
        <div className="container">
        <img className="vigyaan-planet" src={planet} alt="vig_planet"/>
        <RotatingImage style={{position:"absolute", top:"10vh", right:"0%"}} src={prop5} height={100} alt="planet prop" />
        <CircularQuat style={{position:"", left:"0%"}} src={prop6} height={200} alt="satellite props" />
        <RotatingPlanet src={prop7} style={{position:"absolute", top:"30vh", left:"2vw"}} height={200} alt="" />
        <img src={prop8} style={{position:"absolute", top:"110vh", left:"5vw"}} height={400} alt="" />
        <div className="vigyaan-font" >VIGYAAN</div>
        <div className="vigyaan-desc">Vigyaan, the science exhibition organized during the tech fest, showcases groundbreaking innovations, cutting-edge technologies, and exciting projects, providing a platform for students to delve deeper into the world of science and explore limitless possibilities.</div>
        <img className="vigyaan-ring" src={ring} alt="name"></img>
        <div className="btncontainer">
        <span className="metaportal_fn_button_3" onClick={scrollToRegistration} >Click Here To Register</span>
        </div>
        
          {/* <div className="row">
            <div className="col-md-6">
              <div className="gamfi_v2_hero_left">
                <h2>
                  Welcome to Vigyaan
                </h2>
                <p>
                  2023
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <span className="rocket_thumb">
                    <img height="200px"  src={rocketThumb} alt="Rocket thumb" />
                  </span>

                  {particles?.map((particle, i) => (
                    <span
                      key={i}
                      className={`rocket_particle particle_${i + 1}`}
                    >
                      <img src={particle} alt="rocket particle" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </VigyaanStyleWrapper>
    </>
  );
};

export default VigyaanHero;
