import { useState } from "react";
import "./GamePage.css";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import banner from "../../assets/banner/games-&-activity-banner.png";
import { gamesData } from "../../data/gamesData";
import { activitiesData } from "../../data/activitiesData";

export default function GamePage() {
  const [activeTab, setActiveTab] = useState("games");

  const currentData = activeTab === "games" ? gamesData : activitiesData;

  return (
    <>
      <Navbar />

      <Banner
        title="Games & Activities Rental"
        banner={banner}
        breadcrumbs={[{ label: "Games & Activities", path: "/games-activity-for-event/" }]}
      />

      <section className="games-page">
        {/* CONTENT */}
        <div className="games-container default-padding">
          <div className="games-content">
            <p>
              We provide exciting games and activities for birthday parties, school events, corporate functions, carnivals, and mall activations across Delhi NCR.
            </p>
          </div>

          {/* TABS */}
          <div className="games-tabs">
            <button
              className={activeTab === "games" ? "active" : ""}
              onClick={() => setActiveTab("games")}
            >
              🎮 All Games
            </button>

            <button
              className={activeTab === "activities" ? "active" : ""}
              onClick={() => setActiveTab("activities")}
            >
              🎯 Activities
            </button>
          </div>

          {/* COUNT */}
          <div className="games-count">
            Showing {currentData.length} {activeTab === "games" ? "Games" : "Activities"}
          </div>

          {/* GRID */}
          <div className="games-grid">
            {currentData.map((item) => (
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