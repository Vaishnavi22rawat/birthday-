import { Link } from "react-router-dom";

export default function Explore({
  item,
  data = [],
  title = "Explore More",
}) {
  const relatedItems = item.relatedItems || [];

  const slugify = (value) => {
    return (
      value
        ?.toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || ""
    );
  };

  const exploreItems = relatedItems
    .map((relatedItem) => {
      const relatedSlug = slugify(relatedItem);

      return data.find((dataItem) => {
        const dataSlug = slugify(dataItem.slug);
        const dataTitle = slugify(dataItem.title);

        return (
          relatedSlug === dataSlug ||
          relatedSlug === dataTitle
        );
      });
    })
    .filter(Boolean);

  if (!exploreItems.length) {
    return null;
  }

  return (
    <section className="explore-section">
      <div className="container">
        <div className="explore-header">
          <h2>{title}</h2>
        </div>

        <div className="explore-grid">
          {exploreItems.map((relatedItem) => (
            <Link
              key={relatedItem.slug}
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
                  <h3>{relatedItem.exploreTitle || relatedItem.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}