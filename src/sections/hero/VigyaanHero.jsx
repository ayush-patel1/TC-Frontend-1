// import Button from "components/button";
// import BannerStyleWrapper from "./Banner.style";

import rocketThumb from "../../assets/images/rocket-front-color.png";
import planet from "../../assets/images/vighero/vig_planet.webp";
import name from "../../assets/images/vighero/vigyaan_font.webp";
import ring from "../../assets/images/vighero/planet_orbit.webp";
import rocketParticle from "../../assets/images/rocketStar.svg";
import VigyaanStyleWrapper from "./VigyaanHero.style";
import VIGButton from "../../layout/VIGButton";
// import tokenImg1 from "assets/images/homeV2/buyTokenlogo1.png";
// import tokenImg2 from "assets/images/homeV2/buyTokenlogo2.png";
// import tokenImg3 from "assets/images/homeV2/buyTokenlogo3.png";
// import tokenImg4 from "assets/images/homeV2/buyTokenlogo4.png";

const VigyaanHero = () => {
  const particles = [
    rocketParticle,
    rocketParticle,
    rocketParticle,
    rocketParticle,
    rocketParticle,
  ];
//   const tokenImages = [tokenImg1, tokenImg2, tokenImg3, tokenImg4];
  return (
    <>
      <VigyaanStyleWrapper>
        <div className="container">
        <img className="vigyaan-planet" src={planet} alt="vig_planet"/>
        <div className="vigyaan-font" >VIGYAAN</div>
        <div className="vigyaan-desc">Vigyaan, the science exhibition organized during the tech fest, showcases groundbreaking innovations, cutting-edge technologies, and exciting projects, providing a platform for students to delve deeper into the world of science and explore limitless possibilities.</div>
        <img className="vigyaan-ring" src={ring} alt="name"></img>
        <div className="btncontainer">
        <span className="metaportal_fn_button_3">Click Here To Register</span>
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
