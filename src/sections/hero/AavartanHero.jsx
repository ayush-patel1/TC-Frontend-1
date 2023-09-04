// import Counter from "components/counter";
// import Button from "components/button";

import prop1 from "../../assets/prop1.png";
import prop2 from "../../assets/prop2.png";
import dollorIcon from "../../assets/images/tcLogo.png"
import rocketIcon from "../../assets/images/tcLogo.png"
import ufoShape from "../../assets/images/tcLogo.png"

import AavartanStyleWrapper from "./AavartanHero.style";
const AavartanHero = () => {
  return (
    <>
      <AavartanStyleWrapper>
        <div className="container">
          <div className="row">
            <div className="colmd">
              <div className="gamfi_v2_hero_left">
                <h2>AAVARTAN
                </h2>
                <p>
                Team Technocracy organizes a wide range of events, including hackathons, coding competitions, technical workshops, seminars, and technical talks by industry experts all under the banner of our annual Tech-Fest “Aavartan” . We also undertake technical projects and research initiatives.
                </p>
              </div>
            </div>
            <div className="colmd2">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <span className="rocket_thumb">
                    <img height="500vh" src={prop1} alt="Rocket thumb" />
                  </span>
                  <span className="rocket_thumb2">
                    <img height="100%" src={prop2} alt="Rocket thumb" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <img height={20} src={ufoShape} alt="ufo shape" className="ufo_shape" /> */}
      </AavartanStyleWrapper>
    </>
  );
};

export default AavartanHero;
