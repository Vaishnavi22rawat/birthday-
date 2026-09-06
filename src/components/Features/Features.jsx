import React from "react";
import "./Features.css";

import feature1 from "../../assets/features/theme-icon.png";
import feature2 from "../../assets/features/achievement.png";
import feature3 from "../../assets/features/creative.png";
import feature4 from "../../assets/features/children-activity.png";

const features = [
  {
    img: feature1,
    text: "Here the decoration are conducted in tune with the theme.",
  },
  {
    img: feature2,
    text: "More than 5000 events are successfully done that give us confidence.",
  },
  {
    img: feature3,
    text: "Emphasis is more on creative work rather than repetitive work.",
  },
  {
    img: feature4,
    text: "Creativity finds expression through children if we allow it.",
  },
];

const Features = () => {
  return (
    <section className="features default-padding">
      <div className="features-container">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>

            {/* Circle Wrapper */}
            <div className="feature-image-wrapper">
              <div className="feature-image-circle">
                <img
                  src={item.img}
                  alt="feature"
                  className="feature-icon"
                />
              </div>
            </div>

            <p className="feature-text">{item.text}</p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;