import styled, { keyframes } from "styled-components";
import bannerBG from "../../assets/images/bg2.png";

const rocketAnimation = keyframes`
        0%,
        100% {
            bottom: 20px;
        }

        50% {
            bottom: 80px;
        } 
`;
const rocketAnimation2 = keyframes`
        0%,
        100% {
            left: 20px;
        }

        50% {
            left: 80px;
        } 
`;

const AavartanStyleWrapper = styled.section`
  position: relative;
  // background: url(${bannerBG});
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-attachment: fixed;
  height: 100vh;
  padding: 250px 0;
  overflow: hidden;

  .ufo_shape {
    position: absolute;
    top: 2%;
    left: 10%;
    z-index: 1;
  }
  .row{
    display:flex;
  }
  .colmd{
    width:85%;
    margin:0;
  }
  .colmd2{
    width:35%;
    margin:0;
  }

  .gamfi_v2_hero_left {
    h2 {
      // max-width: 515px;
      font-size: 10rem;
      color: #ffffff;
      text-shadow:3px 3px 10px black;
      line-height: 70px;
      text-transform: uppercase;
      position: absolute;
      top:25vh;
      img {
        margin: 0 15px;
      }
    }

    p {
      color: #ffffff;
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      margin-top: 60px;
      text-shadow: 3px 3px 5px black;
      font-family: Inter;
      position: absolute;
      top:35vh;
      width:50vw;
    }
  }


  .gamfi_v2_hero_right {
    display: flex;
    flex-direction: column;
    .metaportal_fn_button_3{
      position:absolute;
      bottom:20vh;
      left:40%;
      width:300px;
    }

    .gamfi_v2_hero_thumb {
      width:100%;
      height:100%;
      display:flex;
      justify-content:center;
      align-item:center;
      .rocket_thumb {
        position: absolute;
        right : 10px;
        animation: ${rocketAnimation} 5s infinite;
        z-index: 1;
      }
      .rocket_thumb2 {
        position: absolute;
        bottom:5px;
        animation: ${rocketAnimation2} 5s infinite;
        z-index: 1;
        left:100px;
      }
    }

    .coin_cap_list {
      display: flex;
      justify-content: space-between;
      li {
        width: 33%;

        h5 {
          line-height: 40px;
          color: #ffffff;
          margin-bottom: 0px;
          font-size: 16px;
        }

        .counter-number {
          font-family: "Russo One";
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 40px;
          text-transform: uppercase;
          color: #6d4afe;
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
      h2 {
        font-size: 40px;
        line-height: 45px;
      }
      p {
        font-size: 17px;
      }
    }

    .gamfi_v2_hero_right {
      .coin_cap_list {
        margin-top: 78px;

        li {
          .counter-number {
            font-size: 17px;
            span {
              font-size: 17px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .gamfi_v2_hero_left {
      .rocket_icon {
        margin-right: 0;
      }
    }
  }
  @media only screen and (max-width: 766px) {
    .gamfi_v2_hero_right {
      margin-top: 50px;
      .coin_cap_list {
        margin-top: 30px;
      }
    }
  }
  @media only screen and (max-width: 575px) {
    .gamfi_v2_hero_left {
      h2 {
        font-size: 33px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .gamfi_v2_hero_left {
      .rocket_icon {
        margin-left: 0;
      }
    }
  }
  @media only screen and (max-width: 320px) {
    .gamfi_v2_hero_right .coin_cap_list li h5 {
      font-size: 14px;
    }
  }
`;

export default AavartanStyleWrapper;
