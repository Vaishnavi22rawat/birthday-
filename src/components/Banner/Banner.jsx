import "./Banner.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import defaultBannerImg from "../../assets/banner/games-&-activity-banner.png";

export default function Banner({ item, title, image, banner, breadcrumbs = [] }) {
  const displayTitle = title || item?.title || "Birthday Services";
  const displayImg =
    image || banner || item?.banner || item?.image || defaultBannerImg;

  return (
    <>
      <div className="detail-banner">
        <img src={displayImg} alt={displayTitle} />

        <div className="detail-overlay">
          <h1>{displayTitle}</h1>
        </div>
      </div>

      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb items={breadcrumbs} />
      )}
    </>
  );
}