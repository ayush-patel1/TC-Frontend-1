import React from 'react';
import './RocketComponent.module.css'

function RocketComponent() {
  return (
    <div>
      <div className="window">
        <div className="burn"></div>
      </div>
      <div className="spaceshuttle">
        <div className="orbiter">
          <div className="orbiter_window"></div>
          <div className="orbiter_wing orbiter_wing--left"></div>
          <div className="orbiter_wing orbiter_wing--right"></div>
          <div className="orbiter_fin orbiter_fin--left"></div>
          <div className="orbiter_fin orbiter_fin--right"></div>
        </div>
      </div>
    </div>
  );
}

export default RocketComponent;