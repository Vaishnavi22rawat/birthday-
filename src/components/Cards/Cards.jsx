import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./Cards.css";

const Cards = ({ item }) => {
  const safeSlug =
    item?.slug ||
    item?.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") ||
    "detail";

  // Dynamic values with sensible fallbacks
  const rating = Number(item?.rating ?? 5);
  const reviewsCount = item?.reviews ?? 120;

  // Render 5 stars dynamically based on rating value
  const renderStars = (score) => {
    return Array.from({ length: 5 }, (_, i) => {
      const starIndex = i + 1;
      if (score >= starIndex) {
        return <FaStar key={i} className="star-filled" />;
      } else if (score >= starIndex - 0.5) {
        return <FaStarHalfAlt key={i} className="star-half" />;
      } else {
        return <FaRegStar key={i} className="star-empty" />;
      }
    });
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const title = item?.title || "Event Service";
    const text = encodeURIComponent(`Hi Birthday Planner! I want to book: ${title}`);
    window.open(`https://wa.me/919811256658?text=${text}`, "_blank");
  };

  return (
    <Link to={`/${safeSlug}`} className="card">
      {/* IMAGE */}
      <div className="card-image">
        <img src={item?.image} alt={item?.title} />

        {/* Overlay */}
        <div className="card-overlay"></div>

        {/* Badge */}
        {item?.badge && <span className="card-badge">{item.badge}</span>}
      </div>

      {/* CONTENT */}
      <div className="card-content">
        {/* TITLE */}
        <h3 className="card-title">{item?.title}</h3>

        {/* REVIEWS */}
        <div className="card-review">
          <div className="card-stars">{renderStars(rating)}</div>
          <span className="card-rating-text">
            {rating > 0 && <strong>{rating.toFixed(1)} </strong>}
            ({reviewsCount} Reviews)
          </span>
        </div>

        {/* PRICE */}
        <div className="card-price-row">
          <div>
            <p className="card-price-label">Starts at</p>
            <h4 className="card-price">₹{item?.price}</h4>
          </div>
        </div>

        {/* BUTTON */}
        <button className="card-btn" onClick={handleWhatsAppBooking}>
          Book Now
        </button>
      </div>
    </Link>
  );
};

export default Cards;