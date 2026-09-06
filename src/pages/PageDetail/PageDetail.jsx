import "./PageDetail.css";
import { useParams, Link } from "react-router-dom";

import SEO from "../../components/Seo/Seo";
import games from "../../data/gamesdetail/gamesDetail";
import activities from "../../data/activitydetail/activitydetail";
import themes from "../../data/themesDetail/themeDetail";

import { gamesData } from "../../data/gamesData";
import { activitiesData } from "../../data/activitiesData";
import { boysThemeData } from "../../data/themesData/boysThemeData";
import { girlsThemeData } from "../../data/themesData/girlsThemeData";
import { customizedThemeData } from "../../data/themesData/customizedThemeData";
import { servicesData } from "../../data/servicesData";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import PageContext from "../../components/PageSections/PageContext/PageContext";
import Gallery from "../../components/PageSections/Gallery/Gallery";
import FaqVideo from "../../components/PageSections/FaqVideo/FaqVideo";
import Explore from "../../components/PageSections/Explore/Explore";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

export default function PageDetail() {
  const rawParams = useParams();
  const slug = rawParams.slug ? rawParams.slug.replace(/\/$/, "").trim() : "";

  const slugify = (text) =>
    text?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "";

  // 1. Direct detail lookup
  let item =
    games.find((i) => i && (i.slug === slug || slugify(i.title) === slug)) ||
    activities.find((i) => i && (i.slug === slug || slugify(i.title) === slug)) ||
    themes.find((i) => i && (i.slug === slug || slugify(i.title) === slug));

  // 2. Fallback resolution if detailed entry isn't in static detail files
  if (!item) {
    const rawMatch =
      gamesData.find((i) => i && (i.slug === slug || slugify(i.title) === slug)) ||
      activitiesData.find((i) => i && (i.slug === slug || slugify(i.title) === slug)) ||
      boysThemeData.find((i) => i && (i.slug === slug || slugify(i.title) === slug)) ||
      girlsThemeData.find((i) => i && (i.slug === slug || slugify(i.title) === slug)) ||
      customizedThemeData.find((i) => i && (i.slug === slug || slugify(i.title) === slug)) ||
      servicesData.find((i) => i && (i.slug === slug || slugify(i.title) === slug));

    if (rawMatch) {
      item = {
        id: rawMatch.id || 999,
        title: rawMatch.title,
        slug: rawMatch.slug || slugify(rawMatch.title),
        banner: rawMatch.image,
        image: rawMatch.image,
        seo: {
          title: `${rawMatch.title} on Rent in Delhi | Birthday Planner`,
          description:
            rawMatch.description ||
            `Book ${rawMatch.title} for birthday parties, corporate events, and carnivals in Delhi NCR.`,
          image: rawMatch.image,
        },
        sections: [
          {
            layout: "text-image",
            title: `${rawMatch.title} - Overview & Rental Info`,
            image: rawMatch.image,
            description: [
              `We offer premium <strong>${rawMatch.title}</strong> for birthday parties, school events, corporate carnivals, and private celebrations across Delhi, Gurgaon, Noida, and Faridabad.`,
              `Our setup includes complete transport, professional attendants, and high quality equipment to ensure zero hassle during your event.`,
              `Book <strong>${rawMatch.title}</strong> today at the best rates in Delhi NCR to give your guests an unforgettable party experience.`,
            ],
          },
          {
            layout: "image-text",
            title: `Why Choose ${rawMatch.title} for Your Birthday Party?`,
            image: rawMatch.image,
            description: [
              `Interactive entertainment is the key to keeping kids and adult guests active and engaged throughout the celebration.`,
              `All equipment is thoroughly sanitized, safety-checked, and operated by trained coordinators.`,
              `Contact our birthday planning team today to check date availability and package discounts!`,
            ],
          },
        ],
        gallery: [
          { image: rawMatch.image, size: "big" },
          { image: rawMatch.image, size: "tall" },
          { image: rawMatch.image, size: "normal" },
          { image: rawMatch.image, size: "wide" },
        ],
        faqs: [
          {
            question: `What is included with ${rawMatch.title}?`,
            answer: `Complete delivery, installation, professional operator, and pickup post event.`,
          },
          {
            question: `How early should we book ${rawMatch.title}?`,
            answer: `We recommend booking 3-5 days in advance to secure weekend date slots.`,
          },
          {
            question: `Is delivery available in Gurgaon & Noida?`,
            answer: `Yes, we cover Delhi, Gurgaon, Noida, Greater Noida, Faridabad, and Ghaziabad.`,
          },
        ],
        relatedItems: [
          "air-hockey-on-rent-in-delhi",
          "jenga-game-on-rent-delhi",
          "parrot-card-reader-on-rent",
        ],
      };
    }
  }

  if (!item) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <h2>Page Not Found</h2>
          <p>The requested service or event item could not be found.</p>
          <Link to="/" style={{ color: "#8152d4", fontWeight: "bold" }}>
            Return to Home Page
          </Link>
        </div>
        <Footer />
        <Button />
      </>
    );
  }

  const relatedData = games.concat(activities).concat(themes);

  return (
    <section className="page-detail">
      <SEO seo={item.seo} slug={item.slug} />

      <Navbar />

      <Banner
        item={item}
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: item.title },
        ]}
      />

      <PageContext item={item} />

      <Gallery item={item} />

      <FaqVideo item={item} />

      <Explore item={item} data={relatedData} />

      <Footer />
      <Button />
    </section>
  );
}