import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import './NavBar.Module.css'
import profilePhoto from './Images/profilePhoto.jpeg'

const NavBar = () => {
  const [productHover, setProductHover] = useState(false);
  const [resource, setResource] = useState(false);

  return (
    <div className="nav-bar-container">
      <section className="nav-bar-section"> 
        <div className="navbar-container">
          <ul>
            <li>
              <h2>Untitled UI</h2>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div id="ig" to="/service">
                <div
                  className="dropdown-container"
                  onMouseEnter={() => {
                    setProductHover(true);
                  }}
                  onMouseLeave={() => {
                    setProductHover(false);
                  }}
                >
                  <div className="dropdown-button">
                    <span>Service</span>{" "}
                    {productHover ? (
                      <FaChevronUp style={{ paddingTop: "6px" }} />
                    ) : (
                      <FaChevronDown style={{ paddingTop: "6px" }} />
                    )}
                  </div>
                  {productHover && (
                    <div className="dropdown-options">
                      <div className="dropdown-option">
                        <Link to="/service/softwaretesting">
                          Software Testing (TAAS)
                        </Link>
                      </div>
                      <div className="dropdown-option">
                        <Link to="/service/softwaredevelopment">
                          Software Development
                        </Link>
                      </div>
                      <div className="dropdown-option">
                        <Link to="/service/skillenhancement">
                          Skill Enhancement
                        </Link>
                      </div>
                      <div className="dropdown-option">
                        <Link to="/service/consultant">IT consultant</Link>
                      </div>
                      <div className="dropdown-option">
                        <Link to="/service/testing">Crowd Testing</Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
            <li>
              <div id="ig" to="/service">
                <div
                  className="dropdown-container"
                  onMouseEnter={() => {
                    setResource(true);
                  }}
                  onMouseLeave={() => {
                    setResource(false);
                  }}
                >
                  <div className="dropdown-button">
                    <span>Resource</span>{" "}
                    {resource ? (
                      <FaChevronUp style={{ paddingTop: "6px" }} />
                    ) : (
                      <FaChevronDown style={{ paddingTop: "6px" }} />
                    )}
                  </div>
                  {resource && (
                    <div className="dropdown-options">
                      <div className="dropdown-option">
                        <Link to="/service/softwaretesting">
                          Software Testing (TAAS)
                        </Link>
                      </div>
                      <div className="dropdown-option">
                        <Link to="/service/softwaredevelopment">
                          Software Development
                        </Link>
                      </div>
                      <div className="dropdown-option">
                        <Link to="/service/skillenhancement">
                          Skill Enhancement
                        </Link>
                      </div>
                      <div className="dropdown-option">
                        <Link to="/service/consultant">IT consultant</Link>
                      </div>
                      <div className="dropdown-option">
                        <Link to="/service/testing">Crowd Testing</Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
            <li><Link>Pricing</Link></li>
          </ul>
        </div>
        <div className="profile">
           <div className="profile-pic">
             <img src={profilePhoto} alt="profilePhoto" />
           </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
