import tc2 from "../assets/images/tcLogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';
// import MenuIcond from '@material-ui/icons/Clear';
const Navbar = ({ walletToggle, navigationToggle }) => {
    const [toggler,setToggler]=useState(false);
    return (
        <div>
            <nav>
                <a href="#" onClick={() => navigationToggle(true)}><img className="navlogo" src={tc2} alt='#jpg' ></img></a>
                <div>
                    <ul id="navbar" className={toggler?"#navbar active":"navbar"}>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/aavartan">AAVARTAN</Link></li>
                        <li><Link to="/vigyaan">VIGYAAN</Link></li>
                        <li><a href="/sponsors">SPONSORS</a></li>
                        <li><a href="/#team">TEAM</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); walletToggle(true);}}>LOGIN</a></li>
                        <div className="responsive-close" onClick={()=>setToggler(!toggler)}><MdClear id='bars'/></div>
                    </ul>
                </div>
                <div className="responsive-open" onClick={()=>setToggler(!toggler)}>
                    <AiOutlineMenu id='bars'  />
                </div>
            </nav>
        </div>);
};



const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Navbar
);