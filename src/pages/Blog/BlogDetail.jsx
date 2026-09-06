import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FaCalendarAlt, FaClock, FaShareAlt, FaWhatsapp, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { blogsData } from "../../data/blogsData";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { slug } = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const post = blogsData.find((b) => b.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="blog-not-found container" style={{ textAlign: "center", padding: "80px 20px" }}>
          <h2>Article Not Found</h2>
          <p>The blog article you are looking for does not exist or has been moved.</p>
          <Link to="/blog" className="back-blog-btn" style={{ color: "#8152d4", fontWeight: "bold" }}>
            Return to All Articles
          </Link>
        </div>
        <Footer />
        <Button />
      </>
    );
  }

  const relatedPosts = blogsData.filter((b) => b.slug !== slug).slice(0, 3);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <Banner
        title={post.title}
        banner={post.image}
        breadcrumbs={[
          { label: "Blog", path: "/blog" },
          { label: post.title },
        ]}
      />

      <main className="blog-detail-page">
        {/* MAIN BODY */}
        <div className="container blog-detail-container default-padding">
          <div className="blog-detail-layout">
            {/* MAIN ARTICLE COLUMN */}
            <article className="blog-article-content">
              <div className="post-meta-row" style={{ marginBottom: "20px" }}>
                <div className="author-info">
                  <img src={post.author.avatar} alt={post.author.name} />
                  <div>
                    <strong>{post.author.name}</strong>
                    <small>{post.author.role}</small>
                  </div>
                </div>

                <div className="meta-pills">
                  <span>
                    <FaCalendarAlt /> {post.date}
                  </span>
                  <span>
                    <FaClock /> {post.readTime}
                  </span>
                </div>
              </div>

              {/* TABLE OF CONTENTS HIGHLIGHT */}
              <div className="toc-box">
                <h4>📌 Key Article Highlights</h4>
                <ul>
                  <li>Latest event trends and theme inspiration in Delhi NCR</li>
                  <li>Actionable tips for smooth timing and entertainment flow</li>
                  <li>How to book trusted party rentals and live performers</li>
                </ul>
              </div>

              {/* ARTICLE BODY */}
              <div
                className="article-body-html"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* AUTHOR BIO BOX */}
              <div className="author-bio-card">
                <img src={post.author.avatar} alt={post.author.name} />
                <div className="bio-text">
                  <h3>Written by {post.author.name}</h3>
                  <span className="bio-role">{post.author.role}</span>
                  <p>
                    Passionate about creating unforgettable birthday experiences and sharing expert party planning strategies for families across Delhi, Gurgaon, Noida, and Faridabad.
                  </p>
                </div>
              </div>

              {/* SHARE BAR */}
              <div className="article-share-bar">
                <span><FaShareAlt /> Share Article:</span>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    post.title + " - " + window.location.href
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="share-btn wa"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="blog-sidebar">
              {/* INQUIRY WIDGET */}
              <div className="sidebar-widget inquiry-widget">
                <h3>🎉 Plan Your Event</h3>
                <p>Get instant quotes and availability for birthday themes, magician, games, and food stalls.</p>

                {formSubmitted ? (
                  <div className="inquiry-success">
                    ✅ Thank you! Our event manager will call you within 15 minutes.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="sidebar-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="tel" placeholder="Mobile Number" required />
                    <select required defaultValue="">
                      <option value="" disabled>
                        Select Event Service...
                      </option>
                      <option value="themes">Birthday Decoration</option>
                      <option value="games">Arcade Games Rental</option>
                      <option value="magician">Magic Show & Performers</option>
                      <option value="food">Live Food Stalls</option>
                    </select>
                    <button type="submit">
                      Get Free Quote <FaPaperPlane />
                    </button>
                  </form>
                )}
              </div>

              {/* RELATED POSTS WIDGET */}
              <div className="sidebar-widget related-widget">
                <h3>Related Articles</h3>
                <div className="related-list">
                  {relatedPosts.map((rel) => (
                    <Link to={`/blog/${rel.slug}`} key={rel.id} className="related-item">
                      <img src={rel.image} alt={rel.title} />
                      <div>
                        <h4>{rel.title}</h4>
                        <small>{rel.date}</small>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* QUICK CALL CARD */}
              <div className="sidebar-widget call-widget">
                <h3>Need Quick Assistance?</h3>
                <p>Talk directly with our event coordinator for instant recommendations.</p>
                <a href="tel:+919811256658" className="quick-call-btn">
                  <FaPhoneAlt /> Call +91 98112 56658
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <Button />
    </>
  );
}
