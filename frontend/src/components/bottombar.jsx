import React from 'react';
import './bottombar.css';

const FixedBottomBar = () => {
  return (
    <div className="fixed-bottom-bar">
      <h3 className="bottom-bar-title">
        Get a Callback from our Health Advisor
      </h3>
      <div className="bottom-bar-form-row">
        <input
          type="tel"
          placeholder="Enter your 10 digit mobile number"
          className="bottom-bar-input"
        />
        <button className="bottom-bar-btn">
          Get a Call Back
        </button>
      </div>
    </div>
  );
};

export default FixedBottomBar;
