import { Link } from "react-router-dom";

export default function Explore({
  item,
  data = [],
  title = "Explore More",
}) {
  const relatedItems = data.filter((relatedItem) =>
    item.relatedItems?.includes(relatedItem.slug)
  );

  if (!relatedItems.length) return null;

  return (
    <section className="explore-section">
      <div className="container">

        <div className="explore-header">
          <h2>{title}</h2>
        </div>

        <div className="explore-grid">
          {relatedItems.map((relatedItem) => (
            <Link
              key={relatedItem.id}
              to={`/${relatedItem.slug}`}
              className="explore-card"
            >
              <div className="explore-image">
                <img
                  src={relatedItem.image}
                  alt={relatedItem.title}
                />
              </div>

              <div className="explore-content">
                <h3>{relatedItem.title}</h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}