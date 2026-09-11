import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.birthdayplanner.co";

export default function SEO({ seo = {}, slug = "" }) {
  const {
    title = "Birthday Planner",
    description = "",
    keywords = "",
    image = "",
    robots = "index, follow",
    ratingValue = "",
    ratingCount = "",
  } = seo;

  const cleanSlug = slug.replace(/^\/|\/$/g, "");

  const canonical = cleanSlug
    ? `${BASE_URL}/${cleanSlug}/`
    : `${BASE_URL}/`;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${BASE_URL}${image.startsWith("/") ? image : `/${image}`}`
    : `${BASE_URL}/favicon.ico`;

  // Product Rating Schema
  const productSchema =
    ratingValue && ratingCount
      ? {
          "@context": "https://schema.org/",
          "@type": "Product",
          name: title,
          image: imageUrl,
          description: description,

          brand: {
            "@type": "Brand",
            name: "Birthdayplanner.co",
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: ratingValue,
            ratingCount: ratingCount,
            bestRating: "5",
            worstRating: "1",
          },
        }
      : null;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      <meta name="robots" content={robots} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Birthday Planner" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Product Rating Schema */}
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
    </Helmet>
  );
}