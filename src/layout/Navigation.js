import { Fragment} from "react";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
import { Link } from "react-router-dom";
import {BsInstagram, BsFacebook} from 'react-icons/bs';
import '../App.css'
const Navigation = ({ navigation, navigationToggle }) => {
  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
        <button
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </button>
        <div className="navbox">
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                  <a
                    href="https://www.instagram.com/nitrr.aavartan/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img
                      src="https://apprecs.org/gp/images/app-icons/300/eb/com.technocracy.app.aavartan.jpg"
                      alt="aavartan_logo"
                      width={100}
                    />
                  </span>
                  <span className="text">INSTAGRAM</span>
                </div>
              </li>
              {/* <li>
                <div className="item">
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="/img/market/discord.png" alt="" />
                  </span>
                  <span className="text">Discord</span>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="nav_holder">
            {/* For JS */}
            <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
            {/* For JS */}
            <ul>
                            <li>
                <Link to="/">
                  <button onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Home</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/aavartan">
                  <button onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Aavartan</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/vigyaan">
                  <button onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Vigyaan</span>
                  </button>
                </Link>
              </li>
              <li>
              <Link to="/team">
                  <button onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Team</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/sponsors">
                  <button onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Sponsors</span>
                  </button>
                </Link>
              </li>
              {/* <li>
                <Link href="/blog-single">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Our Journey</span>
                  </a>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Made With with MAGIC by <br />
                <button
                  target="_blank"
                  rel="noreferrer"
                >
                  Tech Team
                </button>
              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                  <a href="https://www.facebook.com/tc.nitrr">
                    <BsFacebook/>
                  </a>
                </li>
                {/* <li>
                  <a href="">
                  <SiGmail/>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.instagram.com/nitrr.aavartan/">
                    <BsInstagram/>
                  </a>
                </li>
                {/* <li>
                  <a href="">
                    <BsTelegram/>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});
export default connect(mapStateToProps, { navigationToggle })(Navigation);
