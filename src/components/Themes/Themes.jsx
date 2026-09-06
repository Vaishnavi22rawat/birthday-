import React from "react";
import "./Themes.css";

import Cards from "../../components/Cards/Cards";

import theme1 from "../../assets/themes/boys-theme.webp";
import theme2 from "../../assets/themes/girls-theme.webp";
import theme3 from "../../assets/themes/customize-theme.webp";
import theme4 from "../../assets/themes/first-birthday-theme.webp";
import theme5 from "../../assets/themes/twins-theme.webp";
import theme6 from "../../assets/themes/new-born-theme.webp";
import theme7 from "../../assets/themes/casino-theme.webp";
import theme8 from "../../assets/themes/candy-land-theme.webp";

const themesData = [
  {
    image: theme1,
    badge: "Popular",
    title: "Boys Theme",
    slug: "boys-theme-party-delhi",
    price: "1",
    rating: 4.9,
    reviews: 185,
  },
  {
    image: theme2,
    badge: "Trending",
    title: "Girls Theme",
    slug: "girls-theme-party-delhi",
    price: "1",
    rating: 4.8,
    reviews: 210,
  },
  {
    image: theme3,
    badge: "",
    title: "Customize Theme",
    slug: "customized-theme-party-planner",
    price: "1",
    rating: 5.0,
    reviews: 94,
  },
  {
    image: theme4,
    badge: "",
    title: "First Birthday Party",
    slug: "first-birthday-party",
    price: "1",
    rating: 4.7,
    reviews: 140,
  },
  {
    image: theme5,
    badge: "",
    title: "Twins Theme Party",
    slug: "twins-theme-party",
    price: "1",
    rating: 4.6,
    reviews: 78,
  },
  {
    image: theme6,
    badge: "Best Seller",
    title: "New Born Theme",
    slug: "new-born-theme",
    price: "1",
    rating: 4.9,
    reviews: 230,
  },
  {
    image: theme7,
    title: "Casino Theme Party",
    slug: "casino-theme-party",
    price: "1",
    rating: 4.5,
    reviews: 62,
  },
  {
    image: theme8,
    title: "Candy Land Theme",
    slug: "candy-land-theme-party",
    price: "1",
    rating: 4.8,
    reviews: 115,
  },
];

const Themes = () => {
  return (
    <section className="themes-section default-padding">
      {/* Heading */}
      <div className="section-header">
        <span className="tag">Themes</span>
        <h2>Make Every Celebration More Magical</h2>
      </div>

      {/* Cards */}
      <div className="themes-container">
        {themesData.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>

      {/* Button */}
      <div className="theme-btn-wrapper">
        <button className="theme-btn">View All Themes</button>
      </div>
    </section>
  );
};

export default Themes;