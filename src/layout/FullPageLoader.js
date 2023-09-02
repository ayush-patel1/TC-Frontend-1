import React from 'react';
import '../layout/Loader.css'
import image from "../assets/images/demo.gif";

const FullPageLoader = () => {
    return (
        <div className="backdrop">
        <div >
        <img height={100} src={image} alt="Rocket thumb" />
        </div>
    </div>
    )
}

export default FullPageLoader;

