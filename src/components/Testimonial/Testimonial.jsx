import React from "react";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import review1 from "../../assets/testimonial/review1.png";
import review2 from "../../assets/testimonial/review2.png";
import review3 from "../../assets/testimonial/review3.png";
import review4 from "../../assets/testimonial/review4.png";
import review5 from "../../assets/testimonial/review5.png";

import event1 from "../../assets/testimonial/event1.webp";
import event2 from "../../assets/testimonial/event2.jpg";
import event3 from "../../assets/testimonial/event3.jpg";
import event4 from "../../assets/testimonial/event4.jpg";
import event5 from "../../assets/testimonial/event5.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ravi Mehta",
    location: "Gurugram",
    image: review1,
    event: event1,
    reviews: "3 reviews",
    date: "2 months ago",
    review:
      "Stress-free party planning at its best! From balloon decor to game setup everything was perfectly managed.",
  },

  {
    id: 2,
    name: "Simran Luthra",
    location: "Faridabad",
    image: review2,
    event: event2,
    reviews: "5 reviews",
    date: "3 months ago",
    review:
      "Kids absolutely loved the game zones. Air hockey and ball pool were the highlights of the birthday party.",
  },

  {
    id: 3,
    name: "Amit Khanna",
    location: "Noida",
    image: review3,
    event: event3,
    reviews: "2 reviews",
    date: "1 month ago",
    review:
      "Very professional team and smooth setup. The photographer and decorations looked premium and beautiful.",
  },

  {
    id: 4,
    name: "Rohit Thakur",
    location: "Ghaziabad",
    image: review4,
    event: event4,
    reviews: "4 reviews",
    date: "2 weeks ago",
    review:
      "Bull ride and carnival games were a huge hit. Guests enjoyed every activity throughout the evening.",
  },

  {
    id: 5,
    name: "Manju Taneja",
    location: "Delhi",
    image: review5,
    event: event5,
    reviews: "6 reviews",
    date: "1 month ago",
    review:
      "Everything arrived on time and the setup looked amazing. Highly recommended for birthday celebrations.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials-section default-padding">
    <div className="testimonial-container">
      <div className="testimonial-top">

        <span className="google-badge">
          <FcGoogle />
          Google Reviews
        </span>

        <h2>What Our Clients Say</h2>

        <p>
          Real birthday experiences from happy parents and families.
        </p>

      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        className="testimonial-swiper"
      >

        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>

            <div className="testimonial-card">

              <div className="testimonial-header">

                <div className="testimonial-user">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="user-img"
                  />

                  <div className="user-info">

                    <h3>{item.name}</h3>

                    <span className="review-meta">
                      Local Guide • {item.reviews}
                    </span>

                  </div>

                </div>

                <FcGoogle className="google-icon" />

              </div>

              <div className="review-rating">

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <span className="review-date">
                  {item.date}
                </span>

              </div>

              <p className="review-text">
                {item.review}
              </p>

              <div className="event-image">

                <img
                  src={item.event}
                  alt="Birthday Event"
                />

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>
    </div>
    </section>
  );
};

export default Testimonial;