import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.birthdayplanner.co";

export default function SEO({ seo = {}, slug = "" }) {
  const {
    title = "Birthday Planner",
    description = "",
    keywords = "",
    image = "",
    robots = "index, follow",
  } = seo;

  const canonical = slug
    ? `${BASE_URL}/${slug}/`
    : BASE_URL;

  const imageUrl = image || `${BASE_URL}/favicon.ico`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Birthday Planner" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}