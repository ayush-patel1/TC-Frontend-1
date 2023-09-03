import styled, { keyframes } from "styled-components";
import bannerBG from "../../assets/images/vighero/vig_bg.png";

const rocketAnimation = keyframes`
        0%,
        100% {
            bottom: 0;
        }

        50% {
            bottom: 30px;
        } 
`;

const rocketParticleAnimation = (start, end) => {
  return keyframes`

        from {top: ${start}; opacity: 1}
        to {top: ${end}; opacity: 0}
    `;
};

const VigyaanStyleWrapper = styled.section`
  position: relative; 
  background: url(${bannerBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  // height: 100vh;
  padding: 0px 0px;
  overflow: hidden;

  .vigyaan-planet {
    left: 50%;
    position: relative;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 75vw;
    z-index: 2;
}
.vigyaan-font {
  -webkit-animation: cosmos-animation 3s;
  animation: cosmos-animation 3s;
  left: 50%;
  opacity: .5;
  position: absolute;
  top: 8vh;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 45vw;
  z-index: 1;
}
.vigyaan-ring {
  -webkit-animation: ring-animation 3s;
  animation: ring-animation 3s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  left: 50%;
  position: absolute;
  top: 40vw;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 90vw;
  z-index: 2;
}
.button-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 45vh;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  width: 100vw;
  z-index: 2;
}

.btncontainer{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  z-index: 3;
}
  .gamfi_v2_hero_left {
    h2 {
        max-width: 515px;
        font-size: 50px;
        color: #ffffff;
        line-height: 70px;
        text-transform: uppercase;
        margin-bottom: 0px;
        img {
          margin: 0 15px;
        }
      }

      p {
        color: #ffffff;
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        margin-top: 30px;
        font-family: Inter;
      }
    }

  .banner-btns {
    display: flex;
    align-items: center;
    column-gap: 30px;
    margin-bottom: 106px;
  }

//   .buy_token {
//     h6 {
//       font-size: 16px;
//       line-height: 19px;
//       text-transform: uppercase;
//       margin-bottom: 26px;
//       color: #ffffff;
//     }

//     .token-list {
//       display: flex;
//       flex-wrap: nowrap;
//       align-items: center;
//       justify-content: flex-start;
//       column-gap: 32px;
//     }
//   }
  .gamfi_v2_hero_right {
    display: flex;
    // align-items: flex-end;
    // justify-content: center;
    // flex-direction: column;
    // max-width: 450px;
    // margin-left: auto;
    // height: 100%;
    // width: 100%;
    justify-content: flex-end; 
    align-items: center; 

    .gamfi_v2_hero_thumb {
        position: relative;
        margin: 0;
        display:flex;
        flex-direction: column;

      .rocket_thumb {
        position: relative;
        z-index: 1;
        animation: ${rocketAnimation} 5s infinite;
      }

      .rocket_particle {
        position: absolute;

        &.particle_1 {
          top: 15%;
          left: 40%;
          z-index: 2;
          animation: ${rocketParticleAnimation("0", "25%")} 0.95s infinite;
        }
        &.particle_2 {
          top: 50%;
          left: 25%;
          z-index: 2;
          animation: ${rocketParticleAnimation("25%", "50%")} 0.95s infinite;
        }
        &.particle_3 {
          top: 62%;
          right: 29%;
          z-index: 2;
          animation: ${rocketParticleAnimation("40%", "60%")} 1s infinite;
        }
        &.particle_4 {
          top: 60%;
          left: 35%;
          z-index: 0;
          animation: ${rocketParticleAnimation("50%", "80%")} 1.05s infinite;
        }
        &.particle_5 {
          top: 40%;
          right: 33.5%;
          z-index: 0;
          animation: ${rocketParticleAnimation("50%", "90%")} 1.05s infinite;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .gamfi_v2_hero_left {
      h2 {
        font-size: 43px;
       
      }
    }
  }
  @media only screen and (max-width: 991px) {
    .gamfi_v2_hero_left {
      p {
        font-size: 17px;
      }
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 80px;

    .buy_token {
      .token-list {
        flex-wrap: wrap;
        row-gap: 20px;

        a {
          width: 40%;
        }
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .gamfi_v2_hero_left {
      h2 {
        font-size: 33px;
        line-height: 60px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .gamfi_v2_hero_left {
      h2 {
        font-size: 27px;
      }
    }
  }
`;

export default VigyaanStyleWrapper;
