import React from "react";
import "./FirstComponent.css";
import { FaArrowRight } from "react-icons/fa";
import DESKTOP from "../Images/desktoImg.png";
import boltshift from "../Images/boltshift.png";
import lightbox from "../Images/lightbox.png";
import GlobalBank from "../Images/GlobalBank.png";
import Spherule from "../Images/Spherule.png";
import FeatherDev from "../Images/FeatherDev.png";
import Nietzsche from "../Images/Nietzsche.png";

const FirstComponent = () => {
  return (
    <div className="first-component">
      <div className="checkout-dashboard-btn">
        <div className="new-feature">New features</div>
        <div className="dashboard-btn">
          Check out the team dashboard <FaArrowRight />
        </div>
      </div>
      <div className="para-analytics">
        <p>Beautiful analytics to grow smarter</p>
      </div>
      <div className="para-analytics-2">
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage,
          <br />
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

        <div className="btn-click">
            <div className="demo-btn">
                <button>Demo</button>
            </div>
            <div className="sign-up-btn">
                <button>Sign up</button>
            </div>
        </div>

      <div className="img-container">
        <img src={DESKTOP} alt="desktop-img" />
      </div>

      <div className="container-3">
        <div className="para-3">
          <p>Join 4000+ companies already growing</p>
        </div>
        <div className="img-logo">
          <div className="logo-container">
            <img src={boltshift} alt="boltshift-img" />
          </div>
          <div className="logo-container">
            <img src={lightbox} alt="lightbox-img" />
          </div>
          <div className="logo-container"> 
            <img src={FeatherDev} alt="FeatherDev-img" />
          </div>
          <div className="logo-container">
            <img src={Spherule} alt="Spherule-img" />
          </div>
          <div className="logo-container">
            <img src={GlobalBank} alt="GlobalBank-img" />
          </div>
          <div className="logo-container">
            <img src={Nietzsche} alt="Niet"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
