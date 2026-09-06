import "./Hero.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import image1 from "../../assets/hero/image1.jpeg";
import image2 from "../../assets/hero/image2.jpeg";
import image3 from "../../assets/hero/image3.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCreative, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const slides = [
  {
    image: image1,
    title: "Make Every Birthday Magical",
    text: "Premium birthday planning services for unforgettable celebrations",
  },
  {
    image: image2,
    title: "Luxury Birthday Celebrations",
    text: "Premium birthday planning services for unforgettable celebrations",
  },
  {
    image: image3,
    title: "Memories That Last Forever",
    text: "Premium birthday planning services for unforgettable celebrations",
  },
];

export default function Hero() {
  const handleHeroBooking = () => {
    const text = encodeURIComponent(
      "Hi Birthday Planner! I am looking to book a birthday party package. Please share details and pricing."
    );
    window.open(`https://wa.me/919811256658?text=${text}`, "_blank");
  };

  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, EffectCreative, Pagination]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <span className="sparkle s1"></span>
              <span className="sparkle s2"></span>
              <span className="sparkle s3"></span>
              <span className="sparkle s4"></span>
              <span className="sparkle s5"></span>
              <span className="sparkle s6"></span>

              <div className="overlay"></div>

              <div className="hero-content">
                <h1>{slide.title}</h1>

                <p>{slide.text}</p>

                <div className="hero-buttons">
                  <button className="primary-btn" onClick={handleHeroBooking}>
                    <FaWhatsapp style={{ marginRight: "8px", fontSize: "1.2rem" }} />
                    Book Now
                  </button>

                  <Link to="/services" className="secondary-btn">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}