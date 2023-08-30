import { useEffect } from "react";
import {holdSection} from '../utilits'
import { GiHeartWings } from "react-icons/gi";

const HailTechno = () => {
  useEffect(() => {
    holdSection();
  }, []);
  return (
    <div id="social" className="hold">
       <div className="social">
        <h4 className="title" style={{fontFamily:"font1", fontSize:"1.5rem", letterSpacing:"2px", display:"flex"}}>
          HAIL &nbsp;TECHNOCRACY &nbsp;<GiHeartWings size={50}/>
        </h4>
      </div>
    </div>
  );
};
export default HailTechno;
