import React from "react";
import "./ThirdCOmponent.css";
import stat from "../Images/stats.png";
import iphone from "../Images/iphone.png";

const ThirdComponent = () => {
  return (
    <div className="third-component">
      <section className="third-component-1">
        <div>
          <h2>Cutting-edge features for advanced analytics</h2>
        </div>
        <div>
          <p style={{ fontSize: "18px", color: "gray" }}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="stat-img">
          <img src={stat} alt="stat" />
        </div>
        <div className="iphone-container">
          <div className="iphone-img">
            <img src={iphone} alt="iphone" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThirdComponent;
