import React from "react";
import { Link } from "react-router-dom";

const Preview = () => {
  document.body.classList.remove("dark");
  return (
    <div className="tokyo_tm_all_wrap">
      <div className="tokyo_tm_intro">
        <div className="tokyo_tm_intro_fixed_price">
          <span className="anim"></span>
          <span className="anim"></span>
          <span className="anim"></span>
        </div>
        

        <div className="short_info">
          <img src="assets/img/logo/dark.png" alt="" />
         
        </div>
        

        <span className="intro_line"></span>
        <span className="intro_line_2"></span>
        <span className="intro_line_3"></span>
        

        <div className="demos">
          <div className="left">
            <Link to="/home-light" target="_blank">
              <div className="desc">
                <img src="assets/img/intro/light.png" alt="" />
                <h3 className="title">Light </h3>
              </div>
            </Link>
          </div>
          
          <div className="right">
            <Link to="/home-dark" target="_blank">
              <div className="desc">
                <img src="assets/img/intro/dark.png" alt="" />
                <h3 className="title">Dark </h3>
              </div>
            </Link>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Preview;
