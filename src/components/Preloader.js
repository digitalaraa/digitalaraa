// src/components/Preloader.js
import React from 'react';
//import RightArrow from '../assets/images/rightarrow.svg'; // Adjust path if necessary
import RightArrow from '../../static/assets/images/rightarrow.svg';

import './preloader.css'; // Add styles for the preloader

const Preloader = () => {
  return (
    <>
      {/* Preloader */}
      <div className="tekup-preloader-wrap">
        <div className="tekup-preloader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div>

      {/* Progress Circle */}
      <div className="paginacontainer">
        <div className="progress-wrap">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
          <div className="top-arrow">
            <img src={RightArrow} alt="Right Arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
