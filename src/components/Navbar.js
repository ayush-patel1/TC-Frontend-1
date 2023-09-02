import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { MdClear } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';

import tc2 from "../assets/images/tcLogo.png";
import "./Navbar.css";

const Navbar = ({ walletToggle, navigationToggle }) => {
    const [toggler, setToggler] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <div>
            <nav>
                <a href="#" onClick={() => navigationToggle(true)}>
                    <img className="navlogo" src={tc2} alt="#jpg" />
                </a>
                <div>
                    <ul id="navbar" className={toggler ? "navbar active" : "navbar"}>
                        <li className={activeLink === "/" ? "active-link" : ""}>
                            <NavLink to="/" exact activeClassName="active-link">
                                HOME
                            </NavLink>
                        </li>
                        <li className={activeLink === "/aavartan" ? "active-link" : ""}>
                            <NavLink to="/aavartan" activeClassName="active-link">
                                AAVARTAN
                            </NavLink>
                        </li>
                        <li className={activeLink === "/vigyaan" ? "active-link" : ""}>
                            <NavLink to="/vigyaan" activeClassName="active-link">
                                VIGYAAN
                            </NavLink>
                        </li>
                        <li className={activeLink === "/sponsors" ? "active-link" : ""}>
                            <NavLink to="/sponsors" activeClassName="active-link">
                                SPONSORS
                            </NavLink>
                        </li>
                        <li className={activeLink === "/team" ? "active-link" : ""}>
                            <NavLink to="/team" activeClassName="active-link">
                                TEAM
                            </NavLink>
                        </li>
                        <li>
                            <a onClick={(e) => { e.preventDefault(); walletToggle(true); }}>LOGIN</a>
                        </li>
                        <div className="responsive-close" onClick={()=>setToggler(!toggler)}><MdClear id='bars'/></div>
                    </ul>
                </div>
                <div className="responsive-open" onClick={() => setToggler(!toggler)}>
                    <AiOutlineMenu id='bars' />
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(Navbar);
