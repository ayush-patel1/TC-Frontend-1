import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
import { Link } from "react-router-dom";
import {GrInstagram} from 'react-icons/gr';
import {SiGmail} from 'react-icons/si';
import {BsTelegram, BsInstagram, BsYoutube, BsMagic} from 'react-icons/bs';
import { AiFillHeart } from "react-icons/ai";
import '../App.css'
const Navigation = ({ navigation, navigationToggle }) => {
  const [subMenu, setSubMenu] = useState(null);
  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
        <a
          href="#"
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </a>
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
            <ul
              style={{
                transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`,
              }}
            >
                            <li>
                <Link to="/">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Home</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/aavartan">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Aavartan</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/vigyaan">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Vigyaan</span>
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSubMenu("pages");
                  }}
                  className={`${subMenu == "pages" ? "active" : ""}`}
                >
                  <span className="creative_link">
                    Team
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a
                      href="#"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Team
                      </span>
                    </a>
                  </li>
                  <li>
                    <Link to="/team">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          Faculty Incharge
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/team">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Overall Coordinators</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/team">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Head Coordinators</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/team">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Core Coordinators</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/team">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Executives</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/sponsors">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Sponsors</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog-single">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Our Journey</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Made With with MAGIC by <br />
                <a
                  href="https://themeforest.net/user/codeefly/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tech Team
                </a>
              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                  <a href="https://www.youtube.com/@shinnex_production">
                    <BsYoutube/>
                  </a>
                </li>
                <li>
                  <a href="mailto:shinnextream@gmail.com">
                  <SiGmail/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/shinnex_production/">
                    <BsInstagram/>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/Attackontitanhindidubb">
                    <BsTelegram/>
                  </a>
                </li>
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
