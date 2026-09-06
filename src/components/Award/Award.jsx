// AwardSection.jsx

import React from "react";
import "./Award.css";

import awardBanner from "../../assets/banner/award-banner.jpeg";

const Award = () => {
  return (
    <section className="award-section default-padding">

      {/* Heading */}
      <div className="award-heading">

        <p className="award-subtitle">
          Most Engaging Kids Activity Partner of the Year.
        </p>

        <h2 className="award-title">
          EEMA Award Winner
        </h2>

        <div className="award-line"></div>

      </div>

      {/* Banner */}
      <div className="award-banner">

        <img
          src={awardBanner}
          alt="EEMA Award Winner"
        />

      </div>

    </section>
  );
};

export default Award;