import "./PageDetail.css";

import { useParams, Link } from "react-router-dom";

import SEO from "../../components/Seo/Seo";

import games from "../../data/gamesdetail/gamesDetail";
import activities from "../../data/activitydetail/activitydetail";
import themes from "../../data/themesDetail/themeDetail";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import PageContext from "../../components/PageSections/PageContext/PageContext";
import Gallery from "../../components/PageSections/Gallery/Gallery";
import FaqVideo from "../../components/PageSections/FaqVideo/FaqVideo";
import Explore from "../../components/PageSections/Explore/Explore";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

export default function PageDetail() {
  const { slug: rawSlug } = useParams();

  const slug = rawSlug
    ? rawSlug.replace(/\/$/, "").trim()
    : "";

  const slugify = (text) =>
    text
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "";

  // Find the page
  const item =
    games.find(
      (item) =>
        item.slug === slug ||
        slugify(item.title) === slug
    ) ||
    activities.find(
      (item) =>
        item.slug === slug ||
        slugify(item.title) === slug
    ) ||
    themes.find(
      (item) =>
        item.slug === slug ||
        slugify(item.title) === slug
    );

  // Page not found
  if (!item) {
    return (
      <>
        <Navbar />

        <div className="page-not-found">
          <h2>Page Not Found</h2>

          <p>
            The requested service or event item
            could not be found.
          </p>

          <Link to="/">
            Return to Home Page
          </Link>
        </div>

        <Footer />

        <Button />
      </>
    );
  }

  // Related items
  const relatedData = [
    ...games,
    ...activities,
    ...themes,
  ];

  return (
    <section className="page-detail">

      <SEO
        seo={item.seo}
        slug={item.slug}
      />

      <Navbar />

      <Banner
        item={item}
        breadcrumbs={[
          {
            label: item.category,
            path: item.categoryPath,
          },
          {
            label: item.title,
          },
        ]}
      />

      <PageContext item={item} />

      <Gallery item={item} />

      <FaqVideo item={item} />

      <Explore
        item={item}
        data={relatedData}
      />

      <Footer />

      <Button />

    </section>
  );
}