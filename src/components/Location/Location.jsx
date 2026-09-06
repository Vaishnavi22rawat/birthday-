import React from "react";
import "./Location.css";

import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <section className="location-section default-padding">

      <div className="location-container">

        {/* Map */}
        <div className="location-map">

          <iframe
            title="Birthday Planner Location"
            src="https://www.google.com/maps?q=52,MCD%20School%20Road,Chandan%20Hulla,Chhatarpur,New%20Delhi&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Location;