import { useLocation } from "react-router-dom";

import "./ThemeList.css";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import { boysThemeData } from "../../data/themesData/boysThemeData";
import { girlsThemeData } from "../../data/themesData/girlsThemeData";
import { customizedThemeData } from "../../data/themesData/customizedThemeData";

import defaultBanner from "../../assets/banner/games-&-activity-banner.png";

export default function ThemeList() {
  const location = useLocation();

  let data = [];
  let title = "Theme Party Ideas";
  let description = "Creative and exciting birthday themes for parties.";
  let bannerImage = defaultBanner;

  if (location.pathname === "/boys-theme-party-delhi") {
    data = boysThemeData;
    title = "Boys Theme Party Delhi";
    description = "Creative and exciting birthday themes for boys.";
  } else if (location.pathname === "/girls-theme-party-delhi") {
    data = girlsThemeData;
    title = "Girls Theme Party Delhi";
    description = "Beautiful and fun birthday themes for girls.";
  } else if (location.pathname === "/customized-theme-party-planner") {
    data = customizedThemeData;
    title = "Customized Theme Party Planner";
    description = "Personalized birthday party themes designed for your celebration.";
  }

  return (
    <>
      <Navbar />

      <Banner
        title={title}
        banner={bannerImage}
        breadcrumbs={[
          { label: "Themes", path: "/themes" },
          { label: title },
        ]}
      />

      <section className="theme-list-page">
        {/* CONTENT */}
        <div className="theme-list-container default-padding">
          <div className="theme-list-content">
            <p>{description}</p>
          </div>

          {/* COUNT */}
          <div className="theme-list-count">
            Showing {data.length} Themes
          </div>

          {/* GRID */}
          <div className="theme-list-grid">
            {data.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Button />
    </>
  );
}