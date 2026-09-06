import React from "react";
import "./Availability.css";

import jaipurImg from "../../assets/availability/jaipur.webp";
import delhiImg from "../../assets/availability/delhi.webp";
import noidaImg from "../../assets/availability/noida.webp";
import gurgaonImg from "../../assets/availability/gurgaon.webp";
import faridabadImg from "../../assets/availability/faridabad.webp";
import greaterNoidaImg from "../../assets/availability/greater-noida.webp";
import agraImg from "../../assets/availability/agra.webp";

const cities = [
  { name: "Jaipur", image: jaipurImg },
  { name: "Delhi", image: delhiImg },
  { name: "Noida", image: noidaImg },
  { name: "Gurgaon", image: gurgaonImg },
  { name: "Faridabad", image: faridabadImg },
  { name: "Greater Noida", image: greaterNoidaImg },
  { name: "Agra", image: agraImg },
];

const Availability = () => {
  return (
    <section className="availability-section default-padding">
      <div className="availability-container">
        <h2 className="availability-title">
          Serving Smiles Across Delhi NCR & Beyond
        </h2>

       <div className="cities-showcase">
          {cities.map((city, index) => (
            <div className="city-showcase-item" key={index}>
              <div className="city-showcase-image">
                <img src={city.image} alt={city.name} />
              </div>
              <span>{city.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Availability;