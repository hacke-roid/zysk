import React from "react";
import "./SecondComponent.css";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiLightningBold } from "react-icons/pi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRocketchat } from "react-icons/fa";
import { MdKeyboardCommandKey } from "react-icons/md";
import { TbPointerHeart } from "react-icons/tb";
import Sisyphus from "../Images/Sisyphus.png";
import profilePhoto from '../Images/profilePhoto.jpeg'

const SecondComponent = () => {
  return (
    <div>
      <section className="second-container-section">
        <div className="feature-container">
          <div>
            <p style={{ color: "#8324ff" }}>Feature</p>
          </div>

          <div>
            <p className="font-para">
              Analytics that feels like it's from the future
            </p>
          </div>

          <div>
            <p style={{ color: "gray" }}>
              Powerful, self-serve product and growth analytics to help you
              convert, engage,
            </p>
            <p style={{ color: "gray" }}>
              and retain more users. Trusted by over 4,000 startups.
            </p>
          </div>
        </div>
        <div className="container-box-all">
          <div className="container-box">
            <div>
              <IoChatbubblesOutline style={{ fontSize: "40px" }} />
            </div>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                Our people make the difference
              </p>
            </div>
            <div>
              <p style={{ color: "gray", fontSize: "15px" }}>
                We’re an extension of your customer service team, and all of our
                resources are free. Chat to our friendly team 24/7 when you need
                help.
              </p>
            </div>
          </div>
          <div className="container-box">
            <div>
              <PiLightningBold style={{ fontSize: "40px" }} />
            </div>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                Share team inboxes
              </p>
            </div>
            <div>
              <p style={{ color: "gray", fontSize: "15px" }}>
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
          </div>
          <div className="container-box">
            <div>
              <IoChatboxEllipsesOutline style={{ fontSize: "40px" }} />
            </div>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                Deliver instant answers
              </p>
            </div>
            <div>
              <p style={{ color: "gray", fontSize: "15px" }}>
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>
          </div>
          <div className="container-box">
            <div>
              <FaRocketchat style={{ fontSize: "40px" }} />
            </div>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                Manage your team with reports
              </p>
            </div>
            <div>
              <p style={{ color: "gray", fontSize: "15px" }}>
                Measure what matters with Untitled's easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>
            </div>
          </div>
          <div className="container-box">
            <div>
              <MdKeyboardCommandKey style={{ fontSize: "40px" }} />
            </div>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                Connect with customers
              </p>
            </div>
            <div>
              <p style={{ color: "gray", fontSize: "15px" }}>
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
            </div>
          </div>
          <div className="container-box">
            <div>
              <TbPointerHeart
                style={{ fontSize: "40px", border: "2px solid gray" }}
              />
            </div>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                Connect the tools you already use
              </p>
            </div>
            <p style={{ color: "gray", fontSize: "15px" }}>
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
        </div>
      </section>
      <section className="second-container-section-2">
        <div className="sisyphus-img">
          <img src={Sisyphus} alt="sisyphus" />
        </div>
        <div>
          <p style={{ fontSize: "60px", margin: "10px" }}>
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </p>
        </div>
        <div className="profile-photo">
            <img src={profilePhoto} alt="profilePhoto" />
        </div>
        <div className="header-name">
            <h3>Sanjana Kumari</h3>
            <h5>Product Manager, Sisyphus</h5>
        </div>
      </section>
    </div>
  );
};

export default SecondComponent;
