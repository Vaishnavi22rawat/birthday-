import React from "react";
import "./Lookingfor.css";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// IMAGES
import boyTheme from "../../assets/lookingfor/boy-theme-party.png";
import games from "../../assets/lookingfor/games&activities.png";
import photographer from "../../assets/lookingfor/photography.png";
import dj from "../../assets/lookingfor/dj.png";
import girlTheme from "../../assets/lookingfor/girl-theme-party.png";
import digitalGames from "../../assets/lookingfor/digital-games.png";
import playArea from "../../assets/lookingfor/playing.png";

// NEW IMAGES
import eventManagement from "../../assets/lookingfor/event-management.png";
import birthdayVenue from "../../assets/lookingfor/birthday-venue.png";
import balloonDecoration from "../../assets/lookingfor/balloon-decoration.png";
import truckBar from "../../assets/lookingfor/truck.png";
import Multilines from "../Multilines/Multilines";

const lookingData = [
  {
    id: 1,
    title: "Boy Theme Party",
    image: boyTheme,
    bg: "#f7c7ae",
  },
  {
    id: 2,
    title: "Games & Activities",
    image: games,
    bg: "#f3dcc2",
  },
  {
    id: 3,
    title: "Photographer",
    image: photographer,
    bg: "#b8ef72",
  },
  {
    id: 4,
    title: "DJs and Live Music",
    image: dj,
    bg: "#ead9eb",
  },
  {
    id: 5,
    title: "Girls Theme Party",
    image: girlTheme,
    bg: "linear-gradient(135deg,#efb4db,#b8c8ff)",
  },
  {
    id: 6,
    title: "Digital Games",
    image: digitalGames,
    bg: "#f7c7ae",
  },
  {
    id: 7,
    title: "Play Area",
    image: playArea,
    bg: "#b9daf8",
  },

  // NEW CARDS

  {
    id: 8,
    title: "Event Management",
    image: eventManagement,
    bg: "#ffe8b6",
  },
  {
    id: 9,
    title: "Birthday Venue",
    image: birthdayVenue,
    bg: "#d8f3dc",
  },
  {
    id: 10,
    title: "Balloon Decoration",
    image: balloonDecoration,
    bg: "#ffd6e0",
  },
  {
    id: 11,
    title: "Truck Bar",
    image: truckBar,
    bg: "#d6e4ff",
  },
];

const LookingFor = () => {
  return (
    <section className="looking-section  default-padding">
      <div className="container-fluid">

        <h2 className="looking-title">
          Looking For?
        </h2>

        <Swiper
          slidesPerView={7}
          spaceBetween={25}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1.4,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 7,
            },
          }}
          className="looking-swiper"
        >

          {lookingData.map((item) => (
            <SwiperSlide key={item.id}>

              <div
                className="looking-card"
                style={{ background: item.bg }}
              >

                

                <img
                  src={item.image}
                  alt={item.title}
                />

                <h3>{item.title}</h3>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default LookingFor;