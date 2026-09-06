import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaClock, FaCalendarAlt, FaArrowRight, FaPaperPlane } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import { blogCategories, blogsData } from "../../data/blogsData";
import bannerImg from "../../assets/banner/games-&-activity-banner.png";
import "./BlogPage.css";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    return blogsData.filter((item) => {
      const matchesCat = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = blogsData.find((b) => b.featured) || blogsData[0];

  return (
    <>
      <Navbar />

      <Banner
        title="Party Tips & Rental Insights"
        banner={bannerImg}
        breadcrumbs={[{ label: "Blog", path: "/blog" }]}
      />

      <main className="blog-page">
        {/* MAIN BLOG CONTENT */}
        <section className="blog-main-section default-padding">
          <div className="container">
            {/* SEARCH INPUT */}
            <div className="blog-search-box" style={{ marginBottom: "24px" }}>
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search articles (e.g. Cocomelon, Budget, Games, Magician)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-btn" onClick={() => setSearchQuery("")}>
                  ✕
                </button>
              )}
            </div>

            {/* CATEGORY PILL FILTER */}
            <div className="category-pills-bar">
              {blogCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    className={`category-pill-btn ${isActive ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* FEATURED POST SPOTLIGHT */}
            {!searchQuery && activeCategory === "all" && featuredPost && (
              <div className="featured-post-card">
                <div className="featured-img-box">
                  <img src={featuredPost.image} alt={featuredPost.title} />
                  <span className="featured-badge">Featured Article</span>
                </div>

                <div className="featured-content">
                  <span className="blog-cat-tag">{featuredPost.category}</span>
                  <h2>
                    <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>
                  <p>{featuredPost.summary}</p>

                  <div className="author-meta-row">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="author-avatar"
                    />
                    <div className="author-details">
                      <strong>{featuredPost.author.name}</strong>
                      <small>{featuredPost.author.role}</small>
                    </div>

                    <div className="post-time-details">
                      <span>
                        <FaCalendarAlt /> {featuredPost.date}
                      </span>
                      <span>
                        <FaClock /> {featuredPost.readTime}
                      </span>
                    </div>
                  </div>

                  <Link to={`/blog/${featuredPost.slug}`} className="read-article-btn">
                    Read Full Article <FaArrowRight />
                  </Link>
                </div>
              </div>
            )}

            {/* ARTICLE GRID */}
            <div className="blog-grid-header">
              <h3>
                {activeCategory === "all" ? "Latest Party Articles" : "Articles in Category"}
              </h3>
              <span>Showing {filteredBlogs.length} Article(s)</span>
            </div>

            {filteredBlogs.length > 0 ? (
              <div className="blog-card-grid">
                {filteredBlogs.map((post) => (
                  <article className="blog-card" key={post.id}>
                    <div className="blog-card-img-box">
                      <img src={post.image} alt={post.title} />
                      <span className="blog-card-tag">{post.category}</span>
                    </div>

                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <span>
                          <FaCalendarAlt /> {post.date}
                        </span>
                        <span>
                          <FaClock /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="blog-card-title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="blog-card-summary">{post.summary}</p>

                      <div className="blog-card-footer">
                        <div className="card-author-inline">
                          <img src={post.author.avatar} alt={post.author.name} />
                          <span>{post.author.name}</span>
                        </div>

                        <Link to={`/blog/${post.slug}`} className="blog-card-link">
                          Read More <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-blogs-found">
                <h3>No articles found</h3>
                <p>Try searching for another keyword or selecting a different category tab.</p>
                <button
                  className="reset-filter-btn"
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* NEWSLETTER SUBSCRIBE */}
            <div className="newsletter-card">
              <div className="newsletter-text">
                <h2>Stay Updated on Party Trends & Exclusive Offers</h2>
                <p>Subscribe to our newsletter for party planning checklists, vendor discounts, and seasonal birthday themes.</p>
              </div>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email address..." required />
                <button type="submit">
                  Subscribe <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Button />
    </>
  );
}
