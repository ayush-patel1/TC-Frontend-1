// import Counter from "components/counter";
// import Button from "components/button";

import rocketThumb from "../../assets/images/tcLogo.png";
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
            <div className="col-md-6">
              <div className="gamfi_v2_hero_left">
                <h2>AAVARTAN
                </h2>
                <p>
                  The next generation gaming ecosystem for IGOs and NFT market Secure crypto solutions by blockchain technology
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <span className="rocket_thumb">
                    <img height={80} src={rocketThumb} alt="Rocket thumb" />
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
