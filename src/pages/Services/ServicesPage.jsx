import { useState, useMemo } from "react";
import { FaSearch, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Cards from "../../components/Cards/Cards";

import { gamesData } from "../../data/gamesData";
import { activitiesData } from "../../data/activitiesData";
import { boysThemeData } from "../../data/themesData/boysThemeData";
import { girlsThemeData } from "../../data/themesData/girlsThemeData";
import { customizedThemeData } from "../../data/themesData/customizedThemeData";

import bannerImg from "../../assets/banner/services-banner.jpeg";
import "./ServicesPage.css";

const serviceCategories = [
  { id: "all", label: "All Services", icon: "✨" },
  { id: "games", label: "Games & Rentals", icon: "🎮" },
  { id: "activities", label: "Activities & Performers", icon: "🎯" },
  { id: "boys-themes", label: "Boys Themes", icon: "🚀" },
  { id: "girls-themes", label: "Girls Themes", icon: "👑" },
  { id: "customized-themes", label: "Customized Themes", icon: "🎨" },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const slugify = (text) =>
    text?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "";

  // Combine items from all datasets
  const allServices = useMemo(() => {
    const gamesList = gamesData.map((i, idx) => ({
      ...i,
      id: `game-${i.id || idx}`,
      slug: i.slug || slugify(i.title),
      tabCategory: "games",
      badge: i.badge || "Rental",
    }));

    const activitiesList = activitiesData.map((i, idx) => ({
      ...i,
      id: `act-${i.id || idx}`,
      slug: i.slug || slugify(i.title),
      tabCategory: "activities",
      badge: i.badge || "Activity",
    }));

    const boysList = boysThemeData.map((i, idx) => ({
      ...i,
      id: `boy-${i.id || idx}`,
      slug: i.slug || slugify(i.title),
      tabCategory: "boys-themes",
      badge: "Boys Theme",
    }));

    const girlsList = girlsThemeData.map((i, idx) => ({
      ...i,
      id: `girl-${i.id || idx}`,
      slug: i.slug || slugify(i.title),
      tabCategory: "girls-themes",
      badge: "Girls Theme",
    }));

    const customizedList = customizedThemeData.map((i, idx) => ({
      ...i,
      id: `custom-${i.id || idx}`,
      slug: i.slug || slugify(i.title),
      tabCategory: "customized-themes",
      badge: "Custom Theme",
    }));

    return [
      ...gamesList,
      ...activitiesList,
      ...boysList,
      ...girlsList,
      ...customizedList,
    ];
  }, []);

  // Filter to display ONLY active tab data
  const activeTabData = useMemo(() => {
    return allServices.filter((item) => {
      const matchesTab = activeTab === "all" || item.tabCategory === activeTab;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.slug.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [allServices, activeTab, searchQuery]);

  return (
    <>
      <Navbar />

      <Banner
        title="Services For Birthday Events"
        banner={bannerImg}
        breadcrumbs={[{ label: "Services", path: "/services" }]}
      />

      <main className="services-page">
        {/* TABS & CARDS SECTION */}
        <section className="services-content-section default-padding">
          <div className="container">
            {/* SEARCH BAR */}
            <div className="services-search-bar" style={{ marginBottom: "30px" }}>
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search games, activities, themes (e.g. Air Hockey, Tattoo, Magic Show)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
                  ✕
                </button>
              )}
            </div>

            {/* CATEGORY TABS */}
            <div className="service-tabs-wrapper">
              <div className="service-tabs-grid">
                {serviceCategories.map((cat) => {
                  const isActive = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      className={`tab-btn ${isActive ? "active" : ""}`}
                      onClick={() => setActiveTab(cat.id)}
                    >
                      <span className="tab-icon">{cat.icon}</span>
                      <span className="tab-label">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SUMMARY BAR */}
            <div className="active-tab-bar">
              <div className="tab-info">
                <h3>
                  Showing:{" "}
                  <span>
                    {serviceCategories.find((c) => c.id === activeTab)?.label || "Selected Category"}
                  </span>
                </h3>
                <p>Found {activeTabData.length} active item(s)</p>
              </div>
            </div>

            {/* STANDARD CARDS GRID */}
            {activeTabData.length > 0 ? (
              <div className="services-card-grid">
                {activeTabData.map((item) => (
                  <Cards key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="no-services-found">
                <div className="no-data-icon">🔍</div>
                <h3>No items found in this category</h3>
                <p>Try clearing your search query or selecting another tab above.</p>
                <button
                  className="reset-tab-btn"
                  onClick={() => {
                    setActiveTab("all");
                    setSearchQuery("");
                  }}
                >
                  View All Services
                </button>
              </div>
            )}

            {/* CUSTOM PACKAGE CTA */}
            <div className="custom-package-cta">
              <div className="cta-content">
                <h2>Looking for a Customized Event Package?</h2>
                <p>
                  Combine Themes, Balloon Decor, Magician, Games, and Food Stalls into a discounted bundled package tailored for your venue in Delhi NCR.
                </p>
              </div>
              <div className="cta-actions">
                <a href="tel:+919811256658" className="cta-btn phone">
                  <FaPhoneAlt /> Call Organizer
                </a>
                <a
                  href="https://wa.me/919811256658?text=Hi%20Birthday%20Planner,%20I%20want%20a%20customized%20party%20package!"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn whatsapp"
                >
                  <FaWhatsapp /> WhatsApp Instant
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Button />
    </>
  );
}
