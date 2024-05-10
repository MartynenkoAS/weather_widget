import React from "react";
import "./ToggleSwitch.css";
 
const ToggleSwitch = ({ label, switchChekboxValue, switchCekboxFunc }) => {
  
  return (
    <div className="container">
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={label} id={label} checked={switchChekboxValue} onChange={switchCekboxFunc}/>
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};


export default ToggleSwitch;