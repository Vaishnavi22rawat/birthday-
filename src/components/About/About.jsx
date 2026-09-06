import React from "react";
import "./About.css";

import img1 from "../../assets/about/about-img1.webp";
import img2 from "../../assets/about/about-img2.webp";
import img3 from "../../assets/about/about-img3.webp";
import img4 from "../../assets/about/about-img4.webp";

const About = () => {
  return (
    <section className="about-section default-padding">
      <div className="about-container">

        {/* Left Images */}
        <div className="about-images">

          <div className="left-column">
            <img src={img1} alt="Birthday Decoration" />
            <img src={img3} alt="Birthday Setup" />
          </div>

          <div className="right-column">
            <img src={img2} alt="Balloon Decoration" />
            <img src={img4} alt="Birthday Event" />
          </div>

        </div>

        {/* Right Content */}
        <div className="about-content">

           <div className="section-header">
          <span className="tag">About Us</span>

          <h2>Throw the Perfect Party with the Best Birthday Planner in Delhi</h2>

        </div>

          <p>
           Birthday planner in Delhi, Gurgaon, Noida, Faridabad. If you are looking for a birthday planner in Delhi then BirthdayPlanner.co is a subsidiary company of the Fame Business Group. With 12 years of experience, they are one of the best birthday party organizers operating on a large scale in India, providing services like communication planning, strategy, creativity, and artistic work to a vast range of markets across the country. <b>Birthday party organisers in Delhi.</b>
           </p>

           <p>
            They specialize in Kids Artist Management, Birthday Party, New Born Baby, Anniversary Party, Family Day, Inauguration Party, Mundan Ceremony, Kua Pujan Party, Balloon Decoration, Boys Theme, Girls Theme, Flower Decoration, Theme parties, and more. They make parties memorable for you and your children, providing all types of favors for birthday parties, whether it’s your children’s first or your 25th, 30th, 40th, 50th, 60th, 70th, 80th, or 90th birthday celebration or your marriage anniversary at any venue or venues in and around Delhi NCR. <b>Birthday Planner in Delhi.</b>
           </p>

           <p>
            They arrange themed decoration and supplies for theme parties and provide unique ideas or themes according to your requirements, whether your kids are girls, boys, teenagers, or a toddler.
           </p>

          <button className="about-btn">
            Read More
          </button>

        </div>

      </div>
    </section>
  );
};

export default About;